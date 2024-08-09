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
exports.TipoContaService = void 0;
const TipoContaRepository_1 = require("../repository/TipoContaRepository");
class TipoContaService {
    constructor() {
        this.tipoContaRepository = new TipoContaRepository_1.TipoContaRepository();
    }
    criaTipoConta(tipoContaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { descricao, codigoTipoConta } = tipoContaData;
            if (!descricao || !codigoTipoConta) {
                throw new Error("Informações incompletas!");
            }
            const novoTipoConta = yield this.tipoContaRepository.criarTipoConta(descricao, codigoTipoConta);
            console.log("Service - Insert", novoTipoConta);
            return novoTipoConta;
        });
    }
    atualizaTipoConta(tipoContaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, descricao, codigoTipoConta } = tipoContaData;
            if (!id || !descricao || !codigoTipoConta) {
                throw new Error("Informações incompletas!");
            }
            const tipoContaAtualizada = yield this.tipoContaRepository.atualizarTipoConta(id, descricao, codigoTipoConta);
            console.log("Service - Update", tipoContaAtualizada);
            return tipoContaAtualizada;
        });
    }
    deletaTipoConta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("ID inválido");
            }
            yield this.tipoContaRepository.deletarTipoConta(id);
            console.log("Service - Delete, ID", id);
        });
    }
    getTipoConta(id, descricao, codigoTipoConta) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                const tipoContaId = parseInt(id, 10);
                if (!tipoContaId) {
                    throw new Error("ID inválido");
                }
                const tipoConta = yield this.tipoContaRepository.buscarTipoContaPorId(tipoContaId);
                console.log("Service - Buscar", tipoConta);
                return tipoConta;
            }
            else {
                throw new Error("Parâmetros inválidos para busca");
            }
        });
    }
    getTiposConta() {
        return __awaiter(this, void 0, void 0, function* () {
            const tiposConta = yield this.tipoContaRepository.listarTodosTiposConta();
            console.log("Service - Listar todas", tiposConta);
            return tiposConta;
        });
    }
}
exports.TipoContaService = TipoContaService;
