import express from "express";
import { todasModalidades, adicionarModalidade, atualizarModalidade, deletarModalidade, buscarModalidadeID } from "./controller/ProductController"
import { addItem, atualizarEstoque, deletarQuantidade, todosEstoques, buscarEstoqueID } from "./controller/EstoqueController";
import { pesquisarVenda, realizarVenda } from "./controller/VendasController";
const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

// Modalidades

app.get('/api/modalidade/todas', todasModalidades); //1 ok
app.post('/api/modalidade', adicionarModalidade); //2 ok 
app.put('/api/modalidade', atualizarModalidade); //3 ok
app.delete('/api/modalidade/:id', deletarModalidade); //4 ok
app.get('/api/modalidade/:id', buscarModalidadeID); //5 ok

// Estoque
app.post('/api/estoque', addItem); //6 ok
app.get('/api/estoque/todos', todosEstoques); //7 ok
app.get('/api/estoque/:id', buscarEstoqueID); //8 ok
app.put('/api/estoque', atualizarEstoque); //9 ok
app.delete('/api/estoque', deletarQuantidade); //10 ok

// Venda
app.post('/api/venda', realizarVenda); //11 olk
app.get('/api/venda/:id', pesquisarVenda); //12 ok

app.listen(PORT, logInfo);