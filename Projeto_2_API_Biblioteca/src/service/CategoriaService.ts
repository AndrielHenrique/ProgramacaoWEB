import { CategoriaEntity } from "../model/entity/CategoriaEntity";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService {

    private categoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData: any): Promise<CategoriaEntity> {
        const { name } = categoriaData;

        const produto = new CategoriaEntity(undefined, name)

        const novaCategoria = await this.categoriaRepository.inserirCategoria(produto);
        console.log("Service - Insert ", novaCategoria);
        return novaCategoria;
    }

    async atualizarCategoria(produtoData: any): Promise<CategoriaEntity> {
        const { name } = produtoData;

        const produto = new CategoriaEntity(name)

        await this.categoriaRepository.updateCategoria(produto);
        console.log("Service - Update ", produto);
        return produto;
    }

    async deletarCategoria(categoriaData: any): Promise<CategoriaEntity> {
        const { id, name } = categoriaData;

        if (typeof id !== 'number') {
            throw new Error("Id informado incorreto.");
        }
        const categoria = new CategoriaEntity(id, name);
        const categoriasEncontradas: CategoriaEntity[] = await this.categoriaRepository.filterCategoriaByIdName(categoria.id, categoria.name);

        if (categoriasEncontradas.length === 0) {
            throw new Error("Categoria informada inexistente.");
        }
        await this.categoriaRepository.deleteCategoria(categoria.id);
        console.log("Service - Delete Categoria", categoria.id);
        return categoria;
    }

    async filtrarCategoria(produtoData: any): Promise<CategoriaEntity> {
        const idNumber = parseInt(produtoData, 10);

        const produto = await this.categoriaRepository.filterCategoria(idNumber);
        console.log("Service - Filtrar", produto);
        return produto;
    }
    async filtrarCategoriaPorNome(produtoData: any): Promise<CategoriaEntity[]> {
        const name: string = produtoData;

        const produtos = await this.categoriaRepository.filterCategoriaByName(name);
        console.log("Service - Filtrar", produtos);
        return produtos;
    }

    async listarTodasCategorias(): Promise<CategoriaEntity[]> {
        const produto = await this.categoriaRepository.filterAllCategoria();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }

}