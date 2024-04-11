import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, descripition, price } = produtoData;
        if (!name || !descripition || !price) {
            throw new Error("Informaçoes incompletas!");
        }

        const novoProduto = new Product(name, descripition, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any, name: any): Product | undefined {
        
        
        if(id){
            const idNumber: number = parseInt(id, 10)
            return this.productRepository.filtraProdutoPorId(idNumber);
        }
        else if(name){
        return this.productRepository.filtraProdutoPorNome(name);
        }
        console.log(id)
        return undefined;
    }

    getProducts(): Product[] {
        return this.productRepository.filtrarTodosProdutos();
    }


}