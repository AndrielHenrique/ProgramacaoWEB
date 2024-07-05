"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pesquisarVenda = exports.realizarVenda = void 0;
const VendasService_1 = require("../service/VendasService");
const vendaService = new VendasService_1.VendaService();
function realizarVenda(req, res) {
    try {
        const novaVenda = vendaService.inserirVenda(req.body);
        return res.status(200).json({ novaVenda });
    }
    catch (error) {
        return res.status(400).json({ erro: error.message });
    }
}
exports.realizarVenda = realizarVenda;
function pesquisarVenda(req, res) {
    try {
        const venda = vendaService.recuperarVenda(req.params.id);
        if (venda) {
            res.status(200).json({
                mensagem: "Venda encontrada: ",
                venda: venda
            });
        }
        else {
            res.status(404).json({ mensagem: "Venda não encontrada." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarVenda = pesquisarVenda;
;
