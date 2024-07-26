import { executarComandoSQL } from "../database/mysql";
import { Conta } from "../model/Conta";
import { TipoConta } from "../model/TipoConta";

export class ContaRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
             CREATE TABLE IF NOT EXISTS contas (
                id INT AUTO_INCREMENT PRIMARY KEY,
                numero_conta VARCHAR(20) NOT NULL,
                saldo DECIMAL(10, 2) NOT NULL,
                codigoTipoConta VARCHAR(50) NOT NULL,
                FOREIGN KEY (codigoTipoConta) REFERENCES tipos_conta(codigoTipoConta) ON UPDATE CASCADE
            )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log(`Query executada com sucesso`, resultado);
        } catch (err) {
            console.error(`Error`)
        }
    }

    async criarConta(saldo: number, numeroConta: string, tipoConta: number): Promise<Conta> {
        const query = "INSERT INTO contas (numeroConta, saldo, , tipoConta) VALUES (?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [numeroConta, saldo, tipoConta]);
            console.log(`Nova conta inserida com sucesso, ID`, resultado.insertId);
            const conta = new Conta(resultado.insertId, numeroConta, saldo, tipoConta);
            return new Promise<Conta>((resolve) => {
                resolve(conta);
            })
        } catch (err) {
            console.error(`Erro ao inserir conta`, err);
            throw err;
        }
    }
    async buscarContaPorId(id: number): Promise<Conta | null> {
        const query = "SELECT * FROM contas WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            if (resultado.length > 0) {
                const conta = new Conta(resultado[0].id, resultado[0].numero_conta, resultado[0].saldo, resultado[0].codigo_tipo_conta);
                return new Promise<Conta>((resolve) => {
                    resolve(conta);
                });
            } else {
                return new Promise<null>((resolve) => {
                    resolve(null);
                });
            }
        } catch (err) {
            console.error(`Erro ao buscar conta por ID`, err);
            throw err;
        }
    }

    async atualizarConta(id: number, numero_conta: string, saldo: number, codigo_tipo_conta: number): Promise<Conta> {
        const query = "UPDATE contas SET numero_conta = ?, saldo = ?, codigo_tipo_conta = ? WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [numero_conta, saldo, codigo_tipo_conta, id]);
            console.log(`Conta atualizada com sucesso, ID`, id);
            const conta = new Conta(id, numero_conta, saldo, codigo_tipo_conta);
            return new Promise<Conta>((resolve) => {
                resolve(conta);
            });
        } catch (err) {
            console.error(`Erro ao atualizar conta`, err);
            throw err;
        }
    }

    async deletarConta(id: number): Promise<void> {
        const query = "DELETE FROM contas WHERE id = ?";

        try {
            await executarComandoSQL(query, [id]);
            console.log(`Conta deletada com sucesso, ID`, id);
            return new Promise<void>((resolve) => {
                resolve();
            });
        } catch (err) {
            console.error(`Erro ao deletar conta`, err);
            throw err;
        }
    }

    async listarTodasContas(): Promise<Conta[]> {
        const query = "SELECT * FROM contas";

        try {
            const resultado = await executarComandoSQL(query, []);
            const contas: Conta[] = resultado.map((row: any) => new Conta(row.id, row.numero_conta, row.saldo, row.codigo_tipo_conta));
            return new Promise<Conta[]>((resolve) => {
                resolve(contas);
            });
        } catch (err) {
            console.error(`Erro ao listar contas`, err);
            throw err;
        }
    }
}