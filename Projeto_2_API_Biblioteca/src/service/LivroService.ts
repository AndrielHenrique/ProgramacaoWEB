import { LivroEntity } from "../model/entity/LivroEntity";
import { CategoriaRepository } from "../repository/CategoriaRepository";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService {

    private livroRepository = LivroRepository.getInstance();
    private categoriaRepository = CategoriaRepository.getInstance();

    async cadastrarLivro(livroData: any): Promise<LivroEntity> {
        const { titulo, autor, categoriaId } = livroData;

        const categoria = await this.categoriaRepository.filterCategoria(categoriaId);
        if (!categoria) {
            throw new Error("Categoria não encontrada.");
        }

        const livro = new LivroEntity(undefined, titulo, autor, categoriaId);
        return this.livroRepository.inserirLivro(livro);
    }

    async atualizarLivro(livroData: any): Promise<LivroEntity> {
        const { id, titulo, autor, categoriaId } = livroData;

        if (typeof id !== 'number') {
            throw new Error("Id informado incorreto.");
        }
        const livro = new LivroEntity(id, titulo, autor, categoriaId);
        await this.livroRepository.updateLivro(livro);
        console.log("Service - Update ", livro);
        return livro;

    }

    async deletarLivro(livroData: any): Promise<LivroEntity> {
        const { id, name, autor, categoriaID } = livroData;

        if (typeof id !== 'number') {
            throw new Error("Id informado incorreto.");
        }

        const livro = new LivroEntity(id, name, autor, categoriaID);
        const livrosEncontrados: LivroEntity[] = await this.livroRepository.getLivroByAll(livro.name, livro.autor, livro.categoriaID, livro.id);

        if (livrosEncontrados.length === 0) {
            throw new Error("Livro informado inexistente.");
        }


        /*const emprestimos: Emprestimo[] = await this.em   prestimoRepository.getEmprestimosPorLivroId(livro.id);

        if (emprestimos.length > 0) {
            throw new Error("Livro informado não pode ser apagado pois existem empréstimos vinculados.");
        }
            */

        await this.livroRepository.deleteLivro(livro.id);


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