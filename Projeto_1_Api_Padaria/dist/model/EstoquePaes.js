"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
class EstoquePaes {
    constructor(modalidadeID, quantidade, precoVenda) {
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
        this.id = this.gerarID();
    }
    gerarID() {
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
