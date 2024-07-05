"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemVenda = void 0;
class itemVenda {
    constructor(estoquePaesID, quantidade, nome) {
        this.estoquePaesId = this.geraId();
        this.quantidade = quantidade;
        this.nome = nome;
    }
    geraId() {
        return Date.now();
    }
}
exports.itemVenda = itemVenda;
