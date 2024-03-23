"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
function appLog() {
    console.log("A API se encontra disponível no URL: http://localhost:3000");
}
let produtos = [];
function addProduto(req, res) {
    const produto = req.body;
    produtos.push(produto);
    return res.status(200).json({
        mensagem: "Produto adicionado com sucesso!"
    });
}
app.post("/api/produto/add", addProduto);
app.listen(PORT, appLog);
