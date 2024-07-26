import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta";

export class TipoContaRepository {
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
           CREATE TABLE IF NOT EXISTS tipos_conta (
                id INT AUTO_INCREMENT PRIMARY KEY,
                descricao VARCHAR(255) NOT NULL,
                codigoTipoConta VARCHAR(50) UNIQUE NOT NULL
            )
        `;
        try {
            const resultado = await executarComandoSQL(query, []);
            console.log(`Query executada com sucesso`, resultado);
        } catch (err) {
            console.error(`Error`)
        }
    }
    async criarTipoConta(descricao: string, codigoTipoConta: number): Promise<TipoConta> {
        const query = "INSERT INTO tipos_conta (descricao, codigo_tipo_conta) VALUES (?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [descricao, codigoTipoConta]);
            console.log("Novo tipo de conta inserido com sucesso, ID", resultado.insertId);
            return new TipoConta(resultado.insertId, descricao, codigoTipoConta);
        } catch (err) {
            console.error("Erro ao inserir tipo de conta", err);
            throw err;
        }
    }

    async atualizarTipoConta(id: number, descricao: string, codigoTipoConta: number): Promise<TipoConta> {
        const query = "UPDATE tipos_conta SET descricao = ?, codigo_tipo_conta = ? WHERE id = ?";

        try {
            await executarComandoSQL(query, [descricao, codigoTipoConta, id]);
            return new TipoConta(id, descricao, codigoTipoConta);
        } catch (err) {
            console.error("Erro ao atualizar tipo de conta", err);
            throw err;
        }
    }

    async deletarTipoConta(id: number): Promise<void> {
        const query = "DELETE FROM tipos_conta WHERE id = ?";

        try {
            await executarComandoSQL(query, [id]);
            console.log("Tipo de conta deletado com sucesso, ID", id);
        } catch (err) {
            console.error("Erro ao deletar tipo de conta", err);
            throw err;
        }
    }

    async buscarTipoContaPorId(id: number): Promise<TipoConta | null> {
        const query = "SELECT * FROM tipos_conta WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            if (resultado.length > 0) {
                const { descricao, codigo_tipo_conta } = resultado[0];
                return new TipoConta(id, descricao, codigo_tipo_conta);
            } else {
                return null;
            }
        } catch (err) {
            console.error("Erro ao buscar tipo de conta por ID", err);
            throw err;
        }
    }

    async listarTodosTiposConta(): Promise<TipoConta[]> {
        const query = "SELECT * FROM tipos_conta";

        try {
            const resultado = await executarComandoSQL(query, []);
            return resultado.map((row: any) => new TipoConta(row.id, row.descricao, row.codigo_tipo_conta));
        } catch (err) {
            console.error("Erro ao listar todos os tipos de conta", err);
            throw err;
        }
    }
}