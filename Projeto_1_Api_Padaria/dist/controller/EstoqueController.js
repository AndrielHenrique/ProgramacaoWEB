"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarQuantidade = exports.buscarEstoqueID = exports.atualizarEstoque = exports.addItem = exports.todosEstoques = void 0;
const EstoqueService_1 = require("../service/EstoqueService");
const ProductService_1 = require("../service/ProductService");
const estoqueService = new EstoqueService_1.EstoqueService();
const modalidadeService = new ProductService_1.ModalidadeService();
function todosEstoques(req, res) {
    try {
        const modalidadeEncontrada = modalidadeService.obterModalidades();
        if (modalidadeEncontrada.length > 0) {
            res.status(200).json(estoqueService.obterEstoques());
        }
        else {
            res.status(404).json({ mensagem: "Não existe nenhuma modalidade cadastrada." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.todosEstoques = todosEstoques;
;
function addItem(req, res) {
    try {
        const novoEstoque = estoqueService.adicionarItem(req.body);
        res.status(201).json({
            mensagem: "O item foi adicionado ao estoque com sucesso!",
            Estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.addItem = addItem;
function atualizarEstoque(req, res) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.buscarEstoquePorID(id);
        if (item) {
            const novoEstoque = estoqueService.atualizarEstoque(req.body);
            res.status(200).json({
                mensagem: "Estoque atualizado com sucesso!",
                Estoque: novoEstoque,
            });
        }
        else {
            res.status(400).json({ mensagem: "Estoque não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizarEstoque = atualizarEstoque;
;
function buscarEstoqueID(req, res) {
    try {
        const Estoque = estoqueService.buscarEstoquePorID(req.params.id);
        if (Estoque) {
            res.status(200).json({
                mensagem: "Estoque encontrado!",
                Estoque: Estoque
            });
        }
        else {
            res.status(404).json({ mensagem: "Estoque não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.buscarEstoqueID = buscarEstoqueID;
;
function deletarQuantidade(req, res) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const estoque = estoqueService.buscarEstoquePorID(id);
        if (estoque) {
            const resultado = estoqueService.deletarEstoque(req.body);
            if (resultado) {
                res.status(200).json({
                    message: "Quantidade do estoque removida: ",
                    quantidaRemovida: req.body.quantidadeRemover
                });
            }
            else {
                res.status(400).json({ mensagem: "Não é possível deletar essa quantidade pois iria ficar negativo no estoque" });
            }
        }
        else {
            res.status(400).json({ mensagem: "Estoque não encontrado. " });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarQuantidade = deletarQuantidade;
;
