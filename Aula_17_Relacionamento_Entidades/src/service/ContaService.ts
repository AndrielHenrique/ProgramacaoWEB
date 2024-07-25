import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository"

export class serviceConta {
    contaRepository: ContaRepository = new ContaRepository();

    async criaConta(contaData: any): Promise<Conta> {
        const { saldo, numeroConta, tipoConta } = contaData;
        if(!saldo || !numeroConta || !tipoConta){
            throw new Error("Informações incompletas!!");
        }

        const novaConta = await this.contaRepository.inserirConta(saldo, numeroConta, tipoConta);
        console.log("Service - Insert", novaConta);
        return novaConta;
    }
}