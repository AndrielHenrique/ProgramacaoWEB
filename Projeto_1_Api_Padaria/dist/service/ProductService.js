"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeService = void 0;
const Product_1 = require("../model/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ModalidadeService {
    constructor() {
        this.productRepository = new ProductRepository_1.ModalidadeRepository();
    }
    obterModalidades() {
        return this.productRepository.filtrarTodasModalidades().sort((a, b) => a.id - b.id);
    }
    inserirModalidade(produtoData) {
        const { name, vegan } = produtoData;
        if (!name || !(typeof vegan == "boolean")) {
            throw new Error("Informações incompletas");
        }
        const produtoEncontrado = this.productRepository.filtrarModalidadeNome(name);
        if (produtoEncontrado) {
            throw new Error(`Já existe uma Modalidade com esse Nome: ${name}`);
        }
        const novaModalidade = new Product_1.ModalidadePaes(name, vegan);
        this.productRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }
    atualizarModalidade(modalidadeData) {
        const { id, name, vegan } = modalidadeData;
        if (!id || !name || !(typeof vegan == "boolean")) {
            throw new Error("Informações incompletas");
        }
        const modalidadeEncontrada = this.buscarModalidadeID(id);
        if (!modalidadeEncontrada) {
            throw new Error(`Modalidade com o id ${id} não foi encontrado!`);
        }
        modalidadeEncontrada.id = id;
        modalidadeEncontrada.name = name;
        modalidadeEncontrada.vegano = vegan;
        this.productRepository.atualizarModalidade(modalidadeEncontrada);
        return modalidadeEncontrada;
    }
    buscarModalidadeID(id) {
        if (id) {
            const modalidadeid = parseInt(id, 10);
            console.log(`Procurando modalidade com o ID: ${modalidadeid}`);
            return this.productRepository.filtraModalidadePorId(modalidadeid);
        }
        console.log(`Modalidade não encontrada ${id}`);
        return undefined;
    }
    deletarModalidade(id) {
        const product = this.buscarModalidadeID(id);
        if (!product) {
            throw new Error(`Modalidade com o id: ${id} não esta encontrado.!`);
        }
        this.productRepository.deletaModalidade(product);
    }
}
exports.ModalidadeService = ModalidadeService;
