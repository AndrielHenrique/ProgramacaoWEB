import { EmprestimoEntity } from "../model/entity/EmprestimoEntity";
import { LivroEntity } from "../model/entity/LivroEntity";
import { CategoriaRepository } from "../repository/CategoriaRepository";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService {

    private livroRepository = LivroRepository.getInstance();
    private categoriaRepository = CategoriaRepository.getInstance();
    private emprestimoRepository = EmprestimoRepository.getInstance();

    async cadastrarLivro(livroData: any): Promise<LivroEntity> {
        const { name, autor, categoriaID } = livroData;

        const categoriasExistentes = await this.categoriaRepository.filterCategoria(categoriaID);
        if (!categoriasExistentes) {
            throw new Error("Categoria não encontrada.");
        }
        const livroExistente = await this.livroRepository.filterLivroByName(name)
        if (livroExistente.length > 0) {
            throw new Error("Categoria não encontrada.");
        }

        const livro = new LivroEntity(undefined, name, autor, categoriaID);
        return this.livroRepository.inserirLivro(livro);
    }

    async atualizarLivro(livroData: any): Promise<LivroEntity> {
        const { id, name, autor, categoriaID } = livroData;
        if (typeof id !== 'number') {
            throw new Error("Id do livro é obrigatório");
        }
        if (typeof autor !== 'string' || autor.trim() === '') {
            throw new Error("Autor do livro é obrigatório e deve ser uma string não vazia.");
        }
        if (typeof categoriaID !== 'number') {
            throw new Error("Categoria ID deve ser um número válido.");
        }
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error("Nome do livro é obrigatório e deve ser uma string não vazia.");
        }
        if (typeof autor !== 'string' || autor.trim() === '') {
            throw new Error("Autor do livro é obrigatório e deve ser uma string não vazia.");
        }

        const livroExistente = await this.livroRepository.filterLivro(id);
        if (!livroExistente) {
            throw new Error("Livro não encontrado.");
        }

        const categoriasExistentes = await this.categoriaRepository.filterCategoria(categoriaID);
        if (!categoriasExistentes) {
            throw new Error("Categoria não encontrada.");
        }

        const livro = new LivroEntity(id, name, autor, categoriaID);
        await this.livroRepository.updateLivro(livro);
        console.log("Service - Update ", livro);
        return livro;

    }

    async deletarLivro(livroData: any): Promise<LivroEntity> {
        const { id, name, autor, categoriaID } = livroData;

        if (typeof id !== 'number') {
            throw new Error("Id do livro é obrigatório");
        }
        if (typeof autor !== 'string' || autor.trim() === '') {
            throw new Error("Autor do livro é obrigatório e deve ser uma string não vazia.");
        }
        if (typeof categoriaID !== 'number') {
            throw new Error("Categoria ID deve ser um número válido.");
        }
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error("Nome do livro é obrigatório e deve ser uma string não vazia.");
        }
        if (typeof autor !== 'string' || autor.trim() === '') {
            throw new Error("Autor do livro é obrigatório e deve ser uma string não vazia.");
        }

        const livro = new LivroEntity(id, name, autor, categoriaID);
        const livrosEncontrados: LivroEntity[] = await this.livroRepository.getLivroByAll(livro.name, livro.autor, livro.categoriaID, livro.id);

        if (livrosEncontrados.length === 0) {
            throw new Error("Livro informado inexistente.");
        }

        if ((await this.emprestimoRepository.filterEmprestimosPorLivro(livro.id)).length > 0) {
            throw new Error("Livro informado não pode ser apagado pois existem empréstimos vinculados.");
        }

        await this.livroRepository.deleteLivro(livro.id);
        console.log("Service - Delete Categoria", livro.id);
        return livro;
    }


    async filtrarLivro(livroData: any): Promise<LivroEntity> {
        const idNumber = parseInt(livroData, 10);

        const produto = await this.livroRepository.filterLivro(idNumber);
        console.log("Service - Filtrar", produto);
        return produto;
    }
    async filtrarLivroPorNome(livroData: any): Promise<LivroEntity[]> {
        const name: string = livroData;

        const produtos = await this.livroRepository.filterLivroByName(name);
        console.log("Service - Filtrar", produtos);
        return produtos;
    }

    async listarTodosLivros(): Promise<LivroEntity[]> {
        const produto = await this.livroRepository.filterAllLivros();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }

}