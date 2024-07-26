import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository"

export class ContaService {
    contaRepository: ContaRepository = new ContaRepository();

    async criaConta(contaData: any): Promise<Conta> {
        const { saldo, numeroConta, tipoConta } = contaData;
        if (!saldo || !numeroConta || !tipoConta) {
            throw new Error("Informações incompletas!!");
        }

        const novaConta = await this.contaRepository.criarConta(saldo, numeroConta, tipoConta);
        console.log("Service - Insert", novaConta);
        return novaConta;
    }

    async getConta(id: any, numeroConta: any, tipoConta: any): Promise<Conta | null> {
        if (id) {
            const contaId = parseInt(id, 10);
            if (!contaId) {
                throw new Error("ID inválido");
            }

            const conta = await this.contaRepository.buscarContaPorId(contaId);
            console.log("Service - Buscar", conta);
            return conta;
        } else {
            throw new Error("Parâmetros inválidos para busca");
        }
    }

    async atualizaConta(contaData: any): Promise<Conta> {
        const { id, saldo, numeroConta, tipoConta } = contaData;
        if (!id || !saldo || !numeroConta || !tipoConta) {
            throw new Error("Informações incompletas!");
        }

        const contaAtualizada = await this.contaRepository.atualizarConta(id, numeroConta, saldo, tipoConta);
        console.log("Service - Update", contaAtualizada);
        return contaAtualizada;
    }

    async deletaConta(contaData: any): Promise<void> {
        const id = parseInt(contaData, 10);
        if (!id) {
            throw new Error("ID inválido");
        }

        await this.contaRepository.deletarConta(id);
        console.log("Service - Delete, ID", id);
    }

    async getTodasConta(): Promise<Conta[]> {
        const contas = await this.contaRepository.listarTodasContas();
        console.log("Service - Listar todas", contas);
        return contas;
    }
}