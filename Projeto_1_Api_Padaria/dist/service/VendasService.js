"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const VendaPaes_1 = require("../model/VendaPaes");
const VendasRepository_1 = require("../repository/VendasRepository");
const ItemVenda_1 = require("../model/ItemVenda");
const globalData_1 = require("../global/globalData");
class VendaService {
    constructor() {
        this.vendaRepository = new VendasRepository_1.VendaRepository();
    }
    inserirVenda(vendaData) {
        const { cpf, itens } = vendaData;
        if (!cpf || !itens || !Array.isArray(itens)) {
            throw new Error("Informações incompletas");
        }
        const novaVenda = this.processarVenda(cpf, itens);
        return novaVenda;
    }
    processarVenda(cpf, itens) {
        let resumoVenda = [];
        let total = 0;
        for (const item of itens) {
            const estoqueItem = globalData_1.globalData.estoqueList.find((estoque) => estoque.id === item.estoquePaesID);
            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }
            const nomeItem = globalData_1.globalData.modalidadeList.find((modalidade) => modalidade.id === estoqueItem.modalidadeID);
            if (!nomeItem) {
                throw new Error(`Nome do pao ${estoqueItem.modalidadeID} não encontrado em modalidades`);
            }
            if (estoqueItem.quantidade < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque do item ${estoqueItem.modalidadeID}`);
            }
            const quantidadeVenda = item.quantidade;
            estoqueItem.quantidade -= quantidadeVenda;
            total += quantidadeVenda * estoqueItem.precoVenda;
            resumoVenda.push(new ItemVenda_1.itemVenda(estoqueItem.id, quantidadeVenda, nomeItem.name));
        }
        const novaVenda = new VendaPaes_1.VendaPaes(cpf, resumoVenda, total);
        return this.vendaRepository.insereVenda(novaVenda);
    }
    recuperarVenda(id) {
        if (id) {
            const idVenda = parseInt(id, 10);
            console.log(`Obtendo venda com o ID: ${idVenda}`);
            return this.vendaRepository.filtraVendaPorId(idVenda);
        }
        console.log(`Venda não encontrada, verifique o id: ${id}`);
        return undefined;
    }
}
exports.VendaService = VendaService;
