import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteService {
    clienteRepository = new clienteRepository();

    async cadastrarCliente(dadosCliente: any): Promise<Cliente>{
        const { name, cpf, data_nascimento} = dadosCliente;

        if( typeof name !== 'string' || typeof cpf !== 'string' || typeof data_nascimento !== 'object' ){
            throw new Error("Informações incompletas ou incorretas");
        }
        
        return this.clienteRepository.insereCliente(new Cliente(undefined, name, cpf, data_nascimento));
        
    }
}