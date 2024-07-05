
import { EstoqueRepository } from './../repository/EstoqueRepository';
import { EstoquePaes } from './../model/EstoquePaes';
import { ModalidadeService } from './ProductService';

const modalidadeService = new ModalidadeService();


export class EstoqueService {
    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    obterEstoques(): EstoquePaes[] {
        return this.estoqueRepository.filtraTodosEstoques().sort((a, b) => a.id - b.id);
    }

    adicionarItem(EstoqueData: any): EstoquePaes {
        const { modalidadeID, quantidade, precoVenda } = EstoqueData;
        if (!modalidadeID || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }

        const modalidadeExiste = modalidadeService.buscarModalidadeID(modalidadeID);
        if (!modalidadeExiste) {
            throw new Error(`Modalidade com o id ${modalidadeID} não foi encontrado!`);
        }

        const novoEstoque = new EstoquePaes(modalidadeID, quantidade, precoVenda);
        this.estoqueRepository.insereEstoque(novoEstoque);
        return novoEstoque;
    }

    buscarEstoquePorID(id: any): EstoquePaes | undefined {
        if (id) {
            const estoqueID: number = parseInt(id, 10);
            console.log(`Buscando no estoque com o id: ${estoqueID}`);
            return this.estoqueRepository.filtraProdutoPorId(estoqueID);
        } else {
            console.log(`Estoque não foi encontrado`);
            return undefined;
        }
    }

    atualizarEstoque(EstoqueData: any): EstoquePaes {
        const { id, modalidadeId, quantidade, precoVenda } = EstoqueData;
        if (!id || !modalidadeId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }

        const EstoqueEncontrado = this.buscarEstoquePorID(id);
        if (!EstoqueEncontrado) {
            throw new Error(`Estoque com o id: ${id} não existente.`);
        }
        EstoqueEncontrado.id = id;
        EstoqueEncontrado.modalidadeID = modalidadeId;
        EstoqueEncontrado.quantidade += quantidade;
        EstoqueEncontrado.precoVenda = precoVenda;
        this.estoqueRepository.atualizaEstoque(EstoqueEncontrado);
        return EstoqueEncontrado;
    }

    deletarEstoque(itemData: any) {
        const { id, modalidadeId, quantidadeRemover } = itemData;
        if (!id || !modalidadeId || !quantidadeRemover) {
            throw new Error("Informações incompletas");
        }

        const EstoqueEncontrado = this.buscarEstoquePorID(id);
        if (!EstoqueEncontrado) {
            throw new Error("Estoque não encontrado!");
        } else if (EstoqueEncontrado.quantidade < quantidadeRemover) {
            throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque do item ${EstoqueEncontrado.modalidadeID}`);
        }
        EstoqueEncontrado.quantidade -= quantidadeRemover;
        this.estoqueRepository.atualizaEstoque(EstoqueEncontrado);
        return EstoqueEncontrado;
    }


}