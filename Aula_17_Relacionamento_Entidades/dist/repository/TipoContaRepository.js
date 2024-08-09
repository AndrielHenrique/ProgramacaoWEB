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
exports.TipoContaRepository = void 0;
const mysql_1 = require("../database/mysql");
const TipoConta_1 = require("../model/TipoConta");
class TipoContaRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
           CREATE TABLE IF NOT EXISTS tipos_conta (
                id INT AUTO_INCREMENT PRIMARY KEY,
                descricao VARCHAR(255) NOT NULL,
                codigoTipoConta VARCHAR(50) UNIQUE NOT NULL
            )
        `;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log(`Query executada com sucesso`, resultado);
            }
            catch (err) {
                console.error(`Error`);
            }
        });
    }
    criarTipoConta(descricao, codigoTipoConta) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO tipos_conta (descricao, codigo_tipo_conta) VALUES (?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [descricao, codigoTipoConta]);
                console.log("Novo tipo de conta inserido com sucesso, ID", resultado.insertId);
                return new TipoConta_1.TipoConta(resultado.insertId, descricao, codigoTipoConta);
            }
            catch (err) {
                console.error("Erro ao inserir tipo de conta", err);
                throw err;
            }
        });
    }
    atualizarTipoConta(id, descricao, codigoTipoConta) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE tipos_conta SET descricao = ?, codigo_tipo_conta = ? WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [descricao, codigoTipoConta, id]);
                return new TipoConta_1.TipoConta(id, descricao, codigoTipoConta);
            }
            catch (err) {
                console.error("Erro ao atualizar tipo de conta", err);
                throw err;
            }
        });
    }
    deletarTipoConta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM tipos_conta WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log("Tipo de conta deletado com sucesso, ID", id);
            }
            catch (err) {
                console.error("Erro ao deletar tipo de conta", err);
                throw err;
            }
        });
    }
    buscarTipoContaPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tipos_conta WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                if (resultado.length > 0) {
                    const { descricao, codigo_tipo_conta } = resultado[0];
                    return new TipoConta_1.TipoConta(id, descricao, codigo_tipo_conta);
                }
                else {
                    return null;
                }
            }
            catch (err) {
                console.error("Erro ao buscar tipo de conta por ID", err);
                throw err;
            }
        });
    }
    listarTodosTiposConta() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tipos_conta";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return resultado.map((row) => new TipoConta_1.TipoConta(row.id, row.descricao, row.codigo_tipo_conta));
            }
            catch (err) {
                console.error("Erro ao listar todos os tipos de conta", err);
                throw err;
            }
        });
    }
}
exports.TipoContaRepository = TipoContaRepository;
