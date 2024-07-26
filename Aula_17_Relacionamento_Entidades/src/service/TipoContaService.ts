import { TipoConta } from "../model/TipoConta"
import { TipoContaRepository } from "../repository/TipoContaRepository"

export class TipoContaService {
    tipoContaRepository: TipoContaRepository = new TipoContaRepository();

    async criaTipoConta(tipoContaData: any): Promise<TipoConta> {
        const { descricao, codigoTipoConta } = tipoContaData;
        if (!descricao || !codigoTipoConta) {
            throw new Error("Informações incompletas!");
        }

        const novoTipoConta = await this.tipoContaRepository.criarTipoConta(descricao, codigoTipoConta);
        console.log("Service - Insert", novoTipoConta);
        return novoTipoConta;
    }

    async atualizaTipoConta(tipoContaData: any): Promise<TipoConta> {
        const { id, descricao, codigoTipoConta } = tipoContaData;
        if (!id || !descricao || !codigoTipoConta) {
            throw new Error("Informações incompletas!");
        }

        const tipoContaAtualizada = await this.tipoContaRepository.atualizarTipoConta(id, descricao, codigoTipoConta);
        console.log("Service - Update", tipoContaAtualizada);
        return tipoContaAtualizada;
    }

    async deletaTipoConta(id: number): Promise<void> {
        if (!id) {
            throw new Error("ID inválido");
        }

        await this.tipoContaRepository.deletarTipoConta(id);
        console.log("Service - Delete, ID", id);
    }

    async getTipoConta(id: any, descricao: any, codigoTipoConta: any): Promise<TipoConta | null> {
        if (id) {
            const tipoContaId = parseInt(id, 10);
            if (!tipoContaId) {
                throw new Error("ID inválido");
            }
            const tipoConta = await this.tipoContaRepository.buscarTipoContaPorId(tipoContaId);
            console.log("Service - Buscar", tipoConta);
            return tipoConta;
        } else {
            throw new Error("Parâmetros inválidos para busca");
        }
    }

    async getTiposConta(): Promise<TipoConta[]> {
        const tiposConta = await this.tipoContaRepository.listarTodosTiposConta();
        console.log("Service - Listar todas", tiposConta);
        return tiposConta;
    }
}
