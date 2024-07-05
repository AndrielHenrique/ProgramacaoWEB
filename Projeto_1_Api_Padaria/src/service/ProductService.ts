import { ModalidadePaes } from "../model/Product";
import { ModalidadeRepository } from "../repository/ProductRepository";

export class ModalidadeService {

    productRepository: ModalidadeRepository = new ModalidadeRepository();


    obterModalidades(): ModalidadePaes[] {
        return this.productRepository.filtrarTodasModalidades().sort((a, b) => a.id - b.id);
    }

    inserirModalidade(produtoData: any): ModalidadePaes {
        const { name, vegan } = produtoData;
        if (!name || !(typeof vegan == "boolean")) {
            throw new Error("Informações incompletas");
        }

        const produtoEncontrado = this.productRepository.filtrarModalidadeNome(name);
        if (produtoEncontrado) {
            throw new Error(`Já existe uma Modalidade com esse Nome: ${name}`);
        }
        const novaModalidade = new ModalidadePaes(name, vegan);
        this.productRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }

    atualizarModalidade(modalidadeData: any): ModalidadePaes {
        const { id, name, vegan } = modalidadeData;
        if (!id || !name || !(typeof vegan == "boolean")) {
            throw new Error("Informações incompletas");
        }

        const modalidadeEncontrada = this.buscarModalidadeID(id);
        if (!modalidadeEncontrada) {
            throw new Error(`Modalidade com o id ${id} não foi encontrado!`);
        }
        modalidadeEncontrada.id = id;
        modalidadeEncontrada.name = name;
        modalidadeEncontrada.vegano = vegan;
        this.productRepository.atualizarModalidade(modalidadeEncontrada);
        return modalidadeEncontrada;
    }

    buscarModalidadeID(id: any): ModalidadePaes | undefined {
        if (id) {
            const modalidadeid: number = parseInt(id, 10);
            console.log(`Procurando modalidade com o ID: ${modalidadeid}`);
            return this.productRepository.filtraModalidadePorId(modalidadeid);
        }
        console.log(`Modalidade não encontrada ${id}`)
        return undefined;
    }

    deletarModalidade(id: any) {
        const product = this.buscarModalidadeID(id);
        if (!product) {
            throw new Error(`Modalidade com o id: ${id} não foi encontrado.!`);
        }

        this.productRepository.deletaModalidade(product);
    }
}