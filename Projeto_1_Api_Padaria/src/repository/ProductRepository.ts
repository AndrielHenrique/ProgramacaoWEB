
import { ModalidadePaes } from "../model/Product";
import { globalData } from "../global/globalData";

export class ModalidadeRepository {

    filtrarTodasModalidades(): ModalidadePaes[] {
        return globalData.modalidadeList;
    }

    insereModalidade(novaModalidade: ModalidadePaes) {
        globalData.modalidadeList.push(novaModalidade);
    }

    atualizarModalidade(modalidadePao: ModalidadePaes): number {
        const index = globalData.modalidadeList.indexOf(modalidadePao);
        if (index !== -1) {
            globalData.modalidadeList[index] = modalidadePao;
        }
        return index;
    }

    filtraModalidadePorId(id: number): ModalidadePaes | undefined {
        return globalData.modalidadeList.find(modalidadePao => modalidadePao.id === id);
    }

    filtrarModalidadeNome(name: string): ModalidadePaes | undefined {
        return globalData.modalidadeList.find(modalidadePao => modalidadePao.name === name)
    }

    deletaModalidade(modalidadePao: ModalidadePaes) {
        const index = globalData.modalidadeList.indexOf(modalidadePao);
        if (index !== -1) {
            globalData.modalidadeList.splice(index, 1);
        }
    }

}
