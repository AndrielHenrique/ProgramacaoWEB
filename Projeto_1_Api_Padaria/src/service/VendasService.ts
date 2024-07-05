
import { VendaPaes } from "../model/VendaPaes";
import { VendaRepository } from "../repository/VendasRepository";
import { itemVenda } from "../model/ItemVenda";
import { globalData } from "../global/globalData";

export class VendaService {

    vendaRepository: VendaRepository = new VendaRepository();

    inserirVenda(vendaData: any): VendaPaes {
        const { cpf, itens } = vendaData;
        if (!cpf || !itens || !Array.isArray(itens)) {
            throw new Error("Informações incompletas");
        }

        const novaVenda = this.processarVenda(cpf, itens);
        return novaVenda;
    }

    processarVenda(cpf: number, itens: any[]): VendaPaes {

        let resumoVenda: itemVenda[] = [];
        let total = 0;

        for (const item of itens) {
            const estoqueItem = globalData.estoqueList.find((estoque) => estoque.id === item.estoquePaesID);
            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }
            const nomeItem = globalData.modalidadeList.find((modalidade) => modalidade.id === estoqueItem.modalidadeID);

            if (!nomeItem) {
                throw new Error(`Nome do pao ${estoqueItem.modalidadeID} não encontrado em modalidades`);
            }

            if (estoqueItem.quantidade < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque do item ${estoqueItem.modalidadeID}`);
            }

            const quantidadeVenda = item.quantidade;
            estoqueItem.quantidade -= quantidadeVenda;
            total += quantidadeVenda * estoqueItem.precoVenda;

            resumoVenda.push(
                new itemVenda(
                    estoqueItem.id, quantidadeVenda, nomeItem.name)
            );
        }

        const novaVenda = new VendaPaes(cpf, resumoVenda, total)
        return this.vendaRepository.insereVenda(novaVenda);
    }

    recuperarVenda(id: any): VendaPaes | undefined {
        if (id) {
            const idVenda: number = parseInt(id, 10);
            console.log(`Obtendo venda com o ID: ${idVenda}`);
            return this.vendaRepository.filtraVendaPorId(idVenda);
        }
        console.log(`Venda não encontrada, verifique o id: ${id}`)
        return undefined;
    }

}