"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarModalidade = exports.buscarModalidadeID = exports.atualizarModalidade = exports.adicionarModalidade = exports.todasModalidades = void 0;
const ProductService_1 = require("../service/ProductService");
const modalidadeService = new ProductService_1.ModalidadeService();
function todasModalidades(req, res) {
    try {
        res.status(200).json(modalidadeService.obterModalidades());
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.todasModalidades = todasModalidades;
;
function adicionarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.inserirModalidade(req.body);
        res.status(200).json({
            mensagem: "Nova modalidade foi adicionada com sucesso!",
            produto: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.adicionarModalidade = adicionarModalidade;
;
function atualizarModalidade(req, res) {
    try {
        const modalidade = modalidadeService.atualizarModalidade(req.body);
        res.status(201).json({
            mensagem: "Moddalidade foi atualizada com sucesso!",
            produto: modalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizarModalidade = atualizarModalidade;
;
function buscarModalidadeID(req, res) {
    try {
        const modalidadePao = modalidadeService.buscarModalidadeID(req.params.id);
        if (modalidadePao) {
            res.status(200).json({
                mensagem: "Modalidade foi encontrada com sucesso!",
                produto: modalidadePao
            });
        }
        else {
            res.status(404).json({ mensagem: "Modalidade não foi encontrada." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.buscarModalidadeID = buscarModalidadeID;
;
function deletarModalidade(req, res) {
    try {
        modalidadeService.deletarModalidade(req.params.id);
        res.status(200).json({ message: "Modalidade foi exclúida com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarModalidade = deletarModalidade;
;
