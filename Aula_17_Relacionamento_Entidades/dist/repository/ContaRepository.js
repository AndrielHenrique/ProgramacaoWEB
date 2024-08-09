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
exports.ContaRepository = void 0;
const mysql_1 = require("../database/mysql");
const Conta_1 = require("../model/Conta");
class ContaRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
             CREATE TABLE IF NOT EXISTS contas (
                id INT AUTO_INCREMENT PRIMARY KEY,
                numero_conta VARCHAR(20) NOT NULL,
                saldo DECIMAL(10, 2) NOT NULL,
                codigoTipoConta VARCHAR(50) NOT NULL,
                FOREIGN KEY (codigoTipoConta) REFERENCES tipos_conta(codigoTipoConta) ON UPDATE CASCADE
            )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log(`Query executada com sucesso`, resultado);
            }
            catch (err) {
                console.error(`Error`);
            }
        });
    }
    criarConta(saldo, numeroConta, tipoConta) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO contas (numeroConta, saldo, , tipoConta) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [numeroConta, saldo, tipoConta]);
                console.log(`Nova conta inserida com sucesso, ID`, resultado.insertId);
                const conta = new Conta_1.Conta(resultado.insertId, numeroConta, saldo, tipoConta);
                return new Promise((resolve) => {
                    resolve(conta);
                });
            }
            catch (err) {
                console.error(`Erro ao inserir conta`, err);
                throw err;
            }
        });
    }
    buscarContaPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM contas WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                if (resultado.length > 0) {
                    const conta = new Conta_1.Conta(resultado[0].id, resultado[0].numero_conta, resultado[0].saldo, resultado[0].codigo_tipo_conta);
                    return new Promise((resolve) => {
                        resolve(conta);
                    });
                }
                else {
                    return new Promise((resolve) => {
                        resolve(null);
                    });
                }
            }
            catch (err) {
                console.error(`Erro ao buscar conta por ID`, err);
                throw err;
            }
        });
    }
    atualizarConta(id, numero_conta, saldo, codigo_tipo_conta) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE contas SET numero_conta = ?, saldo = ?, codigo_tipo_conta = ? WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [numero_conta, saldo, codigo_tipo_conta, id]);
                console.log(`Conta atualizada com sucesso, ID`, id);
                const conta = new Conta_1.Conta(id, numero_conta, saldo, codigo_tipo_conta);
                return new Promise((resolve) => {
                    resolve(conta);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar conta`, err);
                throw err;
            }
        });
    }
    deletarConta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM contas WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log(`Conta deletada com sucesso, ID`, id);
                return new Promise((resolve) => {
                    resolve();
                });
            }
            catch (err) {
                console.error(`Erro ao deletar conta`, err);
                throw err;
            }
        });
    }
    listarTodasContas() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM contas";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                const contas = resultado.map((row) => new Conta_1.Conta(row.id, row.numero_conta, row.saldo, row.codigo_tipo_conta));
                return new Promise((resolve) => {
                    resolve(contas);
                });
            }
            catch (err) {
                console.error(`Erro ao listar contas`, err);
                throw err;
            }
        });
    }
}
exports.ContaRepository = ContaRepository;
