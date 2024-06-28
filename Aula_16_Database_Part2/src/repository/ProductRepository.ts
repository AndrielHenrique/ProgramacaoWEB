import { executarComandoSQL, tableExists } from "../database/mysql";

export class ProductRepository{

    private imprimeResult(err:any, result:any){
        if(result != undefined){
            console.log("Dentro callback", result);
        }
    }
    
    async createTable() {
        const query = `
        CREATE TABLE Vendas.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL
        )`;

        try {
            if( await tableExists('product')){
                console.log('A tabela já existe!');
            } else{
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
            }
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    async insertProduct(name: string, price: number) {
        const query = `
        INSERT INTO vendas.Product (name, price) VALUES (?, ?)`;

        try {
            const resultado = await executarComandoSQL(query, [name, price], 
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }
    
}

