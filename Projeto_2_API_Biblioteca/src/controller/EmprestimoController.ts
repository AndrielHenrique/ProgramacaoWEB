import { Controller, Route, Tags, Post, Body, Res, TsoaResponse, Put, Delete, Get, Query, Path } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { EmprestimoRequestsDto } from "../model/dto/EmprestimoRequestsDto";
import { EmprestimoService } from "../service/EmprestimoService";

@Route("emprestimo")
@Tags("Emprestimo")
export class EmprestimoController extends Controller {
    emprestimoService = new EmprestimoService();

    @Post()
    async cadastrarEmprestimo(
        @Body() dto: EmprestimoRequestsDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.emprestimoService.cadastrarEmprestimo(dto);
            return success(201, new BasicResponseDto("Empréstimo cadastrado com sucesso", emprestimo));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Put()
    async atualizarEmprestimo(
        @Body() dto: EmprestimoRequestsDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.emprestimoService.atualizarEmprestimo(dto);
            return success(201, new BasicResponseDto("Empréstimo atualizado com sucesso", emprestimo));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarEmprestimo(
        @Body() dto: EmprestimoRequestsDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.emprestimoService.deletarEmprestimo(dto);
            return success(201, new BasicResponseDto("Empréstimo deletado com sucesso", emprestimo));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("id/{id}")
    async filtrarEmprestimoPorId(
        @Path() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.emprestimoService.filtrarEmprestimoPorId(id);
            return success(201, new BasicResponseDto("Empréstimo encontrado pelo ID", emprestimo));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("livro/{idLivro}")
    async filtrarEmprestimoPorLivro(
        @Path() idLivro: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimos = await this.emprestimoService.filtrarEmprestimoPorId(idLivro);
            return success(201, new BasicResponseDto("Empréstimos encontrados pelo Livro", emprestimos));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("usuario/{usuarioID}")
    async filtrarEmprestimoPorUsuario(
        @Path() usuarioID: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimos = await this.emprestimoService.filtrarEmprestimosPorUsuario(usuarioID);
            return success(201, new BasicResponseDto("Empréstimos encontrados pelo Usuário", emprestimos));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("all")
    async listarTodosEmprestimos(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimos = await this.emprestimoService.listarTodosEmprestimos();
            return success(201, new BasicResponseDto("Listando todos os empréstimos", emprestimos));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }
}
