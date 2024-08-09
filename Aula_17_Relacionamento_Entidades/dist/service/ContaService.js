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
exports.ContaService = void 0;
const ContaRepository_1 = require("../repository/ContaRepository");
class ContaService {
    constructor() {
        this.contaRepository = new ContaRepository_1.ContaRepository();
    }
    criaConta(contaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { saldo, numeroConta, tipoConta } = contaData;
            if (!saldo || !numeroConta || !tipoConta) {
                throw new Error("Informações incompletas!!");
            }
            const novaConta = yield this.contaRepository.criarConta(saldo, numeroConta, tipoConta);
            console.log("Service - Insert", novaConta);
            return novaConta;
        });
    }
    getConta(id, numeroConta, tipoConta) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                const contaId = parseInt(id, 10);
                if (!contaId) {
                    throw new Error("ID inválido");
                }
                const conta = yield this.contaRepository.buscarContaPorId(contaId);
                console.log("Service - Buscar", conta);
                return conta;
            }
            else {
                throw new Error("Parâmetros inválidos para busca");
            }
        });
    }
    atualizaConta(contaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, saldo, numeroConta, tipoConta } = contaData;
            if (!id || !saldo || !numeroConta || !tipoConta) {
                throw new Error("Informações incompletas!");
            }
            const contaAtualizada = yield this.contaRepository.atualizarConta(id, numeroConta, saldo, tipoConta);
            console.log("Service - Update", contaAtualizada);
            return contaAtualizada;
        });
    }
    deletaConta(contaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(contaData, 10);
            if (!id) {
                throw new Error("ID inválido");
            }
            yield this.contaRepository.deletarConta(id);
            console.log("Service - Delete, ID", id);
        });
    }
    getTodasConta() {
        return __awaiter(this, void 0, void 0, function* () {
            const contas = yield this.contaRepository.listarTodasContas();
            console.log("Service - Listar todas", contas);
            return contas;
        });
    }
}
exports.ContaService = ContaService;
