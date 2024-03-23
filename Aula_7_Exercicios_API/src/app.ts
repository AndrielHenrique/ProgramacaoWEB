import express, {Request, Response} from "express";
import { Produtos } from "./models/Produtos"

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

function appLog(){
    console.log("A API se encontra disponível no URL: http://localhost:3000/api/produto/add");
}

let produtos:Produtos [] = [];

function addProduto(req: Request, res: Response){
    const produto:Produtos = req.body;
    console.log("Produto adicionado:", produto);
    produtos.push(produto);
    console.log("Produtos:", produtos);
    return res.status(200).json(
        {
            mensagem: "Produto adicionado com sucesso!",
            ProdutoAdicionado: produto
        }
        );
}

app.post("/api/produto/add", addProduto);
app.listen(PORT, appLog);