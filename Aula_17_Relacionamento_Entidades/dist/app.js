"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ContaController_1 = require("./controller/ContaController");
const TipoContaController_1 = require("./controller/TipoContaController");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
app.use(express_1.default.json());
app.post("/api/conta", ContaController_1.cadastrarConta);
app.put("/api/conta", ContaController_1.updateConta);
app.delete("/api/conta", ContaController_1.deletaConta);
app.get("/api/conta", ContaController_1.getConta);
app.get("/api/conta/all", ContaController_1.getContas);
app.post("/api/tipoConta", TipoContaController_1.cadastrarTipoConta);
app.put("/api/tipoConta", TipoContaController_1.updateTipoConta);
app.delete("/api/tipoConta", TipoContaController_1.deletaTipoConta);
app.get("/api/tipoConta", TipoContaController_1.getTipoConta);
app.get("/api/tipoConta/all", TipoContaController_1.getTiposConta);
app.listen(PORT, logInfo);
