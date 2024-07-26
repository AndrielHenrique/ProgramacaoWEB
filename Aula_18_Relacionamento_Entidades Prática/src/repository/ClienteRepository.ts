import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente";

export class ClienteRepository {
    
    constructor(){
        this.createTable();
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS banco.cliente 
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(35) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        data_nascimento Date NOT NULL
        ` 
    try{
        const resultado = await executarComandoSQL(query, []);
        //console.log('Query executada com sucesso:', resultado);
    } catch (err) {
        console.error('Error');
    }
    }

    async insereCliente(cliente: Cliente): Promise<Cliente>{
        const query = "INSERT INTO banco.cliente (name, cpf, data_nascimento) VALUES (?, ?, ?) "
        try{
            const resultado = await executarComandoSQL(query, [cliente.name, cliente.cpf, cliente.data_nascimento]);
            console.log('Cliente inserido com sucesso:', resultado.insertId);
            cliente.id = resultado.insertId;
            return cliente;
        }catch (err) {
            console.error('Erro ao adicionar dados do novo Cliente:', err);
            throw err;
        }
        
    }
}