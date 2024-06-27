import { executarComandoSQL } from "../database/mysql";

export class ProductRepository{

    private imprimeResult(err:any, result:any){
        if(result != undefined){
            console.log("Dentro callback", result);
        }
    }

    createTable() {
        try {
            const resultado = executarComandoSQL("CREATE TABLE Vendas.Product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL)", [],this.imprimeResult);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    insertProduct(name: string, price: number) {
        try {
            const resultado = executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [name, price], this.imprimeResult
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }
    
    //exercicio 1 Funçao deletar produto
    deletProduct(id: number) {
        try {
            const resultado = executarComandoSQL(
                "DELET INTO vendas.Product where id = ?",
                [id], this.imprimeResult
            );
            console.log(`Produto deletado com sucesso`, resultado)
        } catch (err) {
            console.error('Erro ao deletar o produto:', err);
        }
    }

    //exercicio 2 Função update produto
    updateProduct(id:number){
        try{
            const resultado = executarComandoSQL(
                "UPDATE INTO vendas.product WHERE id = ? SET  (?, ?, ?)",
                [id], this.imprimeResult
            );
        }catch (err) {
            console.error('Erro ao atualizar o produto:', err);
        }
    }
}