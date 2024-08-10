import { UsuarioEntity } from "../model/entity/UsuarioEntity";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { PessoaRepository } from "../repository/PessoaRepository";

export class UsuarioService {

    private usuarioRepository = UsuarioRepository.getInstance();
    private pessoaRepository = PessoaRepository.getInstance();

    async cadastrarUsuario(usuarioData: any): Promise<UsuarioEntity> {
        const { idPessoa, senha } = usuarioData;

        const pessoa = await this.pessoaRepository.filterPessoaPorId(idPessoa);
        if (!pessoa) {
            throw new Error("Pessoa não encontrada.");
        }

        const usuario = new UsuarioEntity(undefined, idPessoa, senha);
        return this.usuarioRepository.inserirUsuario(usuario);
    }

    async atualizarUsuario(usuarioData: any): Promise<UsuarioEntity> {
        const { id, senha } = usuarioData;

        if (typeof id !== 'number') {
            throw new Error("ID informado incorreto.");
        }

        const usuario = new UsuarioEntity(id, undefined, senha);
        await this.usuarioRepository.atualizarUsuario(usuario);
        console.log("Service - Update Usuario", usuario);
        return usuario;
    }

    async deletarUsuario(usuarioData: any): Promise<UsuarioEntity> {
        const { id } = usuarioData;

        if (typeof id !== 'number') {
            throw new Error("ID informado incorreto.");
        }

        const usuario = await this.usuarioRepository.filterUsuarioPorId(id);
        if (!usuario) {
            throw new Error("Usuário informado inexistente.");
        }

        await this.usuarioRepository.deletarUsuario(id);
        console.log("Service - Delete Usuario", id);
        return usuario;
    }

    async filtrarUsuarioPorId(id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.filterUsuarioPorId(id);
        console.log("Service - Filtrar Usuario por ID", usuario);
        return usuario;
    }

    async filtrarUsuarioPorIdPessoa(idPessoa: number): Promise<UsuarioEntity[]> {
        const usuarios = await this.usuarioRepository.filterUsuarioPorIdPessoa(idPessoa);
        console.log("Service - Filtrar Usuario por ID Pessoa", usuarios);
        return usuarios;
    }

    async listarTodosUsuarios(): Promise<UsuarioEntity[]> {
        const usuarios = await this.usuarioRepository.listarTodosUsuarios();
        console.log("Service - Listar Todos os Usuários", usuarios);
        return usuarios;
    }
}
