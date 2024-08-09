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
exports.getContas = exports.getConta = exports.deletaConta = exports.updateConta = exports.cadastrarConta = void 0;
const ContaService_1 = require("../service/ContaService");
const serviceConta = new ContaService_1.ContaService();
function cadastrarConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novaConta = yield serviceConta.criaConta(req.body);
            res.status(201).json({
                mensagem: "Conta criada com sucesso!",
                conta: novaConta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.cadastrarConta = cadastrarConta;
function updateConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceConta.atualizaConta(req.body);
            res.status(200).json({
                mensagem: "Conta atualizada com sucesso!",
                conta: conta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.updateConta = updateConta;
function deletaConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceConta.deletaConta(req.body);
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
exports.deletaConta = deletaConta;
function getConta(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceConta.getConta(req.query.id, req.query.numeroConta, req.query.tipoConta);
            res.status(200).json({
                conta: conta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.getConta = getConta;
function getContas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conta = yield serviceConta.getTodasConta();
            res.status(200).json({
                contas: conta
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.getContas = getContas;
