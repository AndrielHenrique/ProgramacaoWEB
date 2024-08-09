import { ProductService } from "../service/ProductService";
import { Controller, Route, Tags, Post, Body, Res, TsoaResponse, Put, Delete, Get, Query } from "tsoa";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
@Route("product")
@Tags("Product")

export class ProductController extends Controller {
    productService = new ProductService();


    @Post()
    async cadastrarProduto(
        @Body() dto: ProductRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<| void> {
        try {
            const product = await this.productService.cadastrarProduto(dto);
            return sucess(201, new BasicResponseDto("Produto criado com sucesso", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Put()
    async atualizarProduto(
        @Body() dto: ProductRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<| void> {
        try {
            const product = await this.productService.atualizarProduto(dto);
            return sucess(201, new BasicResponseDto("Produto atualizado com sucesso", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }

    @Delete()
    async deletarProduto(
        @Body() dto: ProductRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.deletarProduto(dto);
            return sucess(201, new BasicResponseDto("Produto deletado com sucesso", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }

    @Get()
    async filtrarProduto(
        @Query() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.filtrarProduto(id);
            return sucess(201, new BasicResponseDto("Listando produto especifico por id", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }

    @Get()
    async listarTodosProduto(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.listarTodosProdutos();
            return sucess(201, new BasicResponseDto("Listando todos Produtos", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }
}