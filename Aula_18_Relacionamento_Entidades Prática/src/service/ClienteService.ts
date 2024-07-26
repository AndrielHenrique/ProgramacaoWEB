import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteService {
    clienteRepository = new ClienteRepository();

    async cadastrarCliente(dadosCliente: any): Promise<Cliente>{
        const { name, cpf, data_nascimento} = dadosCliente;

        if( typeof name !== 'string' || typeof cpf !== 'string' || typeof data_nascimento !== 'object' ){
            throw new Error("Informações incompletas ou incorretas");
        }
        const clienteResult = await this.clienteRepository.getClienteDados(undefined, cpf, undefined);
        if(clienteResult.length == 0){
            throw new Error("Dados do clienete informado inexistente.");
        }
        
        return this.clienteRepository.insereCliente(new Cliente(undefined, name, cpf, data_nascimento));
        
    }
}