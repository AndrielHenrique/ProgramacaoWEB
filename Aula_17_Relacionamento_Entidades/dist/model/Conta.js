"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(id, numeroConta, saldo, tipoConta) {
        this.id = id || 0;
        this.saldo = saldo || 0;
        this.numeroConta = numeroConta || this.geraNumeroConta();
        this.tipoConta = tipoConta || 0;
    }
    geraNumeroConta() {
        return "C" + Date.now();
    }
}
exports.Conta = Conta;
