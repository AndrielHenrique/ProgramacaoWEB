"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoConta = void 0;
class TipoConta {
    constructor(id, descricao, codigoTipoConta) {
        this.id = id || 0;
        this.descricao = descricao || '';
        this.codigoTipoConta = codigoTipoConta || this.geraNumeroConta();
    }
    geraNumeroConta() {
        return Date.now();
    }
}
exports.TipoConta = TipoConta;
