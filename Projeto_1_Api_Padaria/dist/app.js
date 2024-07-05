"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./controller/ProductController");
const EstoqueController_1 = require("./controller/EstoqueController");
const VendasController_1 = require("./controller/VendasController");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
// Modalidades
app.get('/api/modalidade/todas', ProductController_1.todasModalidades); //1 ok
app.post('/api/modalidade', ProductController_1.adicionarModalidade); //2 ok 
app.put('/api/modalidade', ProductController_1.atualizarModalidade); //3 ok
app.delete('/api/modalidade/:id', ProductController_1.deletarModalidade); //4 ok
app.get('/api/modalidade/:id', ProductController_1.buscarModalidadeID); //5 ok
// Estoque
app.post('/api/estoque', EstoqueController_1.addItem); //6 ok
app.get('/api/estoque/todos', EstoqueController_1.todosEstoques); //7 ok
app.get('/api/estoque/:id', EstoqueController_1.buscarEstoqueID); //8 ok
app.put('/api/estoque', EstoqueController_1.atualizarEstoque); //9 ok
app.delete('/api/estoque', EstoqueController_1.deletarQuantidade); //10 ok
// Venda
app.post('/api/venda', VendasController_1.realizarVenda); //11 olk
app.get('/api/venda/:id', VendasController_1.pesquisarVenda); //12 ok
app.listen(PORT, logInfo);
