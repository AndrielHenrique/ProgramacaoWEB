"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeRepository = void 0;
const globalData_1 = require("../global/globalData");
class ModalidadeRepository {
    filtrarTodasModalidades() {
        return globalData_1.globalData.modalidadeList;
    }
    insereModalidade(novaModalidade) {
        globalData_1.globalData.modalidadeList.push(novaModalidade);
    }
    atualizarModalidade(modalidadePao) {
        const index = globalData_1.globalData.modalidadeList.indexOf(modalidadePao);
        if (index !== -1) {
            globalData_1.globalData.modalidadeList[index] = modalidadePao;
        }
        return index;
    }
    filtraModalidadePorId(id) {
        return globalData_1.globalData.modalidadeList.find(modalidadePao => modalidadePao.id === id);
    }
    filtrarModalidadeNome(name) {
        return globalData_1.globalData.modalidadeList.find(modalidadePao => modalidadePao.name === name);
    }
    deletaModalidade(modalidadePao) {
        const index = globalData_1.globalData.modalidadeList.indexOf(modalidadePao);
        if (index !== -1) {
            globalData_1.globalData.modalidadeList.splice(index, 1);
        }
    }
}
exports.ModalidadeRepository = ModalidadeRepository;
