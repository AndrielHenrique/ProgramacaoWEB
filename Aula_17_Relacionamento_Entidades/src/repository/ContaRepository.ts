import { executarComandoSQL } from "../database/mysql";
import { Conta } from "../model/Conta";
import { TipoConta } from "../model/TipoConta";

export class ContaRepository {

    constructor(){
        this.createTable();
    }

    private async createTable() {
            const query = `
            CREATE TABLE IF NOT EXIST contas (
                id int AUTO_INCREMENT PRIMARY KEY,
                numeroConta decimal(10,2) NOT NULL,
                saldo decimal(10,2) NOT NuLL,
                tipoConta decimal(10,2) NOT NULL
            )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log(`Query executada com sucesso`, resultado);
        } catch (err){
            console.error(`Error`)
        }
    }

    async inserirConta(saldo: number, numeroConta: string, tipoConta: number ):Promise<Conta>{
        const query = "INSERT INTO contas (numeroConta, saldo, , tipoConta) VALUES (?, ?, ?)";

        try{
            const resultado = await executarComandoSQL(query, [numeroConta, saldo, tipoConta]);
            console.log(`Nova conta inserida com sucesso, ID`, resultado.insertId);
            const conta = new Conta(resultado.insertId, numeroConta,saldo,tipoConta);
            return new Promise<Conta>((resolve)=>{
                resolve(conta);
            })
        } catch (err){
            console.error(`Erro ao inserir conta`, err);
            throw err;
        }
    }

}