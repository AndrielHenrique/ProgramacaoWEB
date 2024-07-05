"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(name, vegan) {
        this.id = this.gerarID();
        this.name = name;
        this.vegano = vegan;
    }
    gerarID() {
        return Date.now();
    }
}
exports.ModalidadePaes = ModalidadePaes;
