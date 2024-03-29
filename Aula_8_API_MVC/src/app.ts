import express from "express";
import { cadastrarProduto, pesquisarProdutoPorID, listaProdutos } from "./controller/ProductController"

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function logInfo() {
    console.log(`API em execução no url : htpp:localhost:${PORT}`);
}

app.post("/api/product", cadastrarProduto);
app.get("/api/product", pesquisarProdutoPorID);
app.get("/api/product", listaProdutos);

app.listen(PORT, logInfo);

