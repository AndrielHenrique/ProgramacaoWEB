import mysql, { Connection} from 'mysql2';

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'vendas'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfig);

mysqlConnection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

export function executarComandoSQL(query: string, valores: any[]): Promise<any>{
    return new Promise<any>((resolve, reject) => {
        mysqlConnection.query(query, valores, (err, resultado:any) => {
            if (err) {
                console.error('Erro ao executar a query.', err);
                reject(err);
                throw err;
            }
            console.log("Dentro do repository: ",resultado);
            resolve(resultado)
        })
    }
    )
    
}

export async function tableExists(tableName: string): Promise<boolean>{
    const query = 'show tables from Vendas like ?';
    try{
        const result: [] = await executarComandoSQL(query, [tableName]);
        return new Promise<boolean>((resolve,reject) =>{
            resolve(result.length > 0);
        }
        )
    }catch(err){
        throw err;
    }
    
}