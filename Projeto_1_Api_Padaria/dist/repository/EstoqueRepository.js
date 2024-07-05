"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const globalData_1 = require("../global/globalData");
class EstoqueRepository {
    filtraTodosEstoques() {
        return globalData_1.globalData.estoqueList;
    }
    insereEstoque(novoEstoque) {
        globalData_1.globalData.estoqueList.push(novoEstoque);
    }
    atualizaEstoque(estoquePao) {
        const index = globalData_1.globalData.estoqueList.indexOf(estoquePao);
        if (index !== -1) {
            globalData_1.globalData.estoqueList[index] = estoquePao;
        }
        return index;
    }
    filtraProdutoPorId(id) {
        return globalData_1.globalData.estoqueList.find(product => product.id === id);
    }
    deletaEstoque(estoquePao) {
        const index = globalData_1.globalData.estoqueList.indexOf(estoquePao);
        if (index !== -1) {
            globalData_1.globalData.estoqueList.splice(index, 1);
        }
    }
}
exports.EstoqueRepository = EstoqueRepository;
