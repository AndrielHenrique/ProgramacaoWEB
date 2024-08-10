import { EmprestimoEntity } from "../model/entity/EmprestimoEntity";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";
import { LivroRepository } from "../repository/LivroRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class EmprestimoService {

    private emprestimoRepository = EmprestimoRepository.getInstance();
    private livroRepository = LivroRepository.getInstance();
    private usuarioRepository = UsuarioRepository.getInstance();

    async cadastrarEmprestimo(emprestimoData: any): Promise<EmprestimoEntity> {
        const { idLivro, usuarioID, dataEmprestimo, dataDevolucao } = emprestimoData;

        const livro = await this.livroRepository.filterLivro(idLivro);
        if (!livro) {
            throw new Error("Livro não encontrado.");
        }

        const usuario = await this.usuarioRepository.filterUsuarioPorId(usuarioID);
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        const emprestimo = new EmprestimoEntity(undefined, idLivro, usuarioID, dataEmprestimo, dataDevolucao);
        return this.emprestimoRepository.inserirEmprestimo(emprestimo);
    }

    async atualizarEmprestimo(emprestimoData: any): Promise<EmprestimoEntity> {
        const { id, idLivro, usuarioID, dataEmprestimo, dataDevolucao } = emprestimoData;

        if (typeof id !== 'number') {
            throw new Error("ID informado incorreto.");
        }

        const livro = await this.livroRepository.filterLivro(idLivro);
        if (!livro) {
            throw new Error("Livro não encontrado.");
        }

        const usuario = await this.usuarioRepository.filterUsuarioPorId(usuarioID);
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        const emprestimo = new EmprestimoEntity(id, idLivro, usuarioID, dataEmprestimo, dataDevolucao);
        await this.emprestimoRepository.atualizarEmprestimo(emprestimo);
        console.log("Service - Update Emprestimo", emprestimo);
        return emprestimo;
    }

    async deletarEmprestimo(emprestimoData: any): Promise<EmprestimoEntity> {
        const { id } = emprestimoData;

        if (typeof id !== 'number') {
            throw new Error("ID informado incorreto.");
        }

        const emprestimo = await this.emprestimoRepository.filterEmprestimoPorId(id);
        if (!emprestimo) {
            throw new Error("Empréstimo informado não existe.");
        }

        await this.emprestimoRepository.deletarEmprestimo(id);
        console.log("Service - Delete Emprestimo", id);
        return emprestimo;
    }

    async filtrarEmprestimoPorId(id: number): Promise<EmprestimoEntity> {
        const emprestimo = await this.emprestimoRepository.filterEmprestimoPorId(id);
        console.log("Service - Filtrar Emprestimo por ID", emprestimo);
        return emprestimo;
    }

    async listarTodosEmprestimos(): Promise<EmprestimoEntity[]> {
        const emprestimos = await this.emprestimoRepository.listarTodosEmprestimos();
        console.log("Service - Listar Todos os Emprestimos", emprestimos);
        return emprestimos;
    }

    async filtrarEmprestimosPorUsuario(usuarioID: number): Promise<EmprestimoEntity[]> {
        const emprestimos = await this.emprestimoRepository.filterEmprestimosPorUsuario(usuarioID);
        console.log("Service - Filtrar Emprestimos por Usuario", emprestimos);
        return emprestimos;
    }

    async filtrarEmprestimosPorLivro(idLivro: number): Promise<EmprestimoEntity[]> {
        const emprestimos = await this.emprestimoRepository.filterEmprestimosPorLivro(idLivro);
        console.log("Service - Filtrar Emprestimos por Livro", emprestimos);
        return emprestimos;
    }
}
