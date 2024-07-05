import { EstoquePaes } from "../model/EstoquePaes";
import { globalData } from "../global/globalData";

export class EstoqueRepository {

    filtraTodosEstoques(): EstoquePaes[] {
        return globalData.estoqueList;
    }

    insereEstoque(novoEstoque: EstoquePaes) {
        globalData.estoqueList.push(novoEstoque);
    }

    atualizaEstoque(estoquePao: EstoquePaes): number {
        const index = globalData.estoqueList.indexOf(estoquePao);
        if (index !== -1) {
            globalData.estoqueList[index] = estoquePao;
        }
        return index;
    }

    filtraProdutoPorId(id: number): EstoquePaes | undefined {
        return globalData.estoqueList.find(product => product.id === id);
    }

    deletaEstoque(estoquePao: EstoquePaes) {
        const index = globalData.estoqueList.indexOf(estoquePao);
        if (index !== -1) {
            globalData.estoqueList.splice(index, 1);
        }
    }


}