"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const EstoqueRepository_1 = require("./../repository/EstoqueRepository");
const EstoquePaes_1 = require("./../model/EstoquePaes");
const ProductService_1 = require("./ProductService");
const modalidadeService = new ProductService_1.ModalidadeService();
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
    }
    obterEstoques() {
        return this.estoqueRepository.filtraTodosEstoques().sort((a, b) => a.id - b.id);
    }
    adicionarItem(EstoqueData) {
        const { modalidadeID, quantidade, precoVenda } = EstoqueData;
        if (!modalidadeID || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        const modalidadeExiste = modalidadeService.buscarModalidadeID(modalidadeID);
        if (!modalidadeExiste) {
            throw new Error(`Modalidade com o id ${modalidadeID} não foi encontrado!`);
        }
        const novoEstoque = new EstoquePaes_1.EstoquePaes(modalidadeID, quantidade, precoVenda);
        this.estoqueRepository.insereEstoque(novoEstoque);
        return novoEstoque;
    }
    buscarEstoquePorID(id) {
        if (id) {
            const estoqueID = parseInt(id, 10);
            console.log(`Buscando no estoque com o id: ${estoqueID}`);
            return this.estoqueRepository.filtraProdutoPorId(estoqueID);
        }
        else {
            console.log(`Estoque não foi encontrado`);
            return undefined;
        }
    }
    atualizarEstoque(EstoqueData) {
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
    deletarEstoque(itemData) {
        const { id, modalidadeId, quantidadeRemover } = itemData;
        if (!id || !modalidadeId || !quantidadeRemover) {
            throw new Error("Informações incompletas");
        }
        const EstoqueEncontrado = this.buscarEstoquePorID(id);
        if (!EstoqueEncontrado) {
            throw new Error("Produto não cadastrado!!!");
        }
        else if (EstoqueEncontrado.quantidade < quantidadeRemover) {
            throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque do item ${EstoqueEncontrado.modalidadeID}`);
        }
        EstoqueEncontrado.quantidade -= quantidadeRemover;
        this.estoqueRepository.atualizaEstoque(EstoqueEncontrado);
        return EstoqueEncontrado;
    }
}
exports.EstoqueService = EstoqueService;
