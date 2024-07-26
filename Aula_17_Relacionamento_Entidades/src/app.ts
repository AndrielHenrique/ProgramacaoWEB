import { cadastrarConta, deletaConta, getConta, getContas, updateConta } from "./controller/ContaController";
import { cadastrarTipoConta, deletaTipoConta, getTipoConta, getTiposConta, updateTipoConta } from "./controller/TipoContaController";
import express from "express"

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

app.use(express.json());

app.post("/api/conta", cadastrarConta);
app.put("/api/conta", updateConta);
app.delete("/api/conta", deletaConta)
app.get("/api/conta", getConta)
app.get("/api/conta/all", getContas)

app.post("/api/tipoConta", cadastrarTipoConta);
app.put("/api/tipoConta", updateTipoConta);
app.delete("/api/tipoConta", deletaTipoConta)
app.get("/api/tipoConta", getTipoConta)
app.get("/api/tipoConta/all", getTiposConta)

app.listen(PORT, logInfo);