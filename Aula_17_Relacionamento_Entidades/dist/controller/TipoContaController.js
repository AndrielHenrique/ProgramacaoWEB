"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTiposConta = exports.getTipoConta = exports.deletaTipoConta = exports.updateTipoConta = exports.cadastrarTipoConta = void 0;
const TipoContaService_1 = require("../service/TipoContaService");
const serviceTipoConta = new TipoContaService_1.TipoContaService();
function cadastrarTipoConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoTipoConta = yield serviceTipoConta.criaTipoConta(req.body);
            res.status(201).json({
                mensagem: "Tipo de conta criada com sucesso!",
                tipo: novoTipoConta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.cadastrarTipoConta = cadastrarTipoConta;
function updateTipoConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tipoConta = yield serviceTipoConta.atualizaTipoConta(req.body);
            res.status(200).json({
                mensagem: "Tipo de conta atualizado com sucesso!",
                tipo_conta: tipoConta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.updateTipoConta = updateTipoConta;
function deletaTipoConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceTipoConta.deletaTipoConta(req.body);
            res.status(200).json({
                mensagem: "Conta deletada com sucesso!",
                conta: conta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.deletaTipoConta = deletaTipoConta;
function getTipoConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceTipoConta.getTipoConta(req.query.id, req.query.descricao, req.query.codigoTipoConta);
            res.status(200).json({
                tipo_conta: conta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.getTipoConta = getTipoConta;
function getTiposConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceTipoConta.getTiposConta();
            res.status(200).json({
                tipos_conta: conta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.getTiposConta = getTiposConta;
