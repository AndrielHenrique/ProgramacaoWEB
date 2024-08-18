import { PessoaEntity } from "../model/entity/PessoaEntity";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService {

    private pessoaRepository = PessoaRepository.getInstance();

    async cadastrarPessoa(pessoaData: any): Promise<PessoaEntity> {
        const { name, email } = pessoaData;

        const pessoasExistentes: PessoaEntity[] = await this.pessoaRepository.filterPessoaPorEmail(email);
        if (pessoasExistentes.length > 0) {
            throw new Error("Já existe uma pessoa cadastrada com esse e-mail.");
        }

        const pessoa = new PessoaEntity(undefined, name, email);
        return this.pessoaRepository.inserirPessoa(pessoa);
    }

    async atualizarPessoa(pessoaData: any): Promise<PessoaEntity> {
        const { id, name, email } = pessoaData;

        if (typeof name !== 'string') {
            throw new Error("Nome da pessoa é obrigatório e deve ser uma string não vazia.");
        }
        if (typeof email !== 'string') {
            throw new Error("Email da pessoa é obrigatório e deve ser uma string não vazia.");
        }

        if (typeof id !== 'number') {
            throw new Error("Id informado incorreto.");
        }
        const pessoaExistente = await this.pessoaRepository.filterPessoaPorId(id);
        if (pessoaExistente.length == 0) {
            throw new Error("Pessoa não encontrado.");
        }

        const pessoa = new PessoaEntity(id, name, email);
        await this.pessoaRepository.atualizarPessoa(pessoa);
        console.log("Service - Update Pessoa", pessoa);
        return pessoa;
    }

    async deletarPessoa(pessoaData: any): Promise<PessoaEntity[]> {
        const { id } = pessoaData;

        if (typeof id !== 'number') {
            throw new Error("Id informado incorreto.");
        }

        const pessoa = await this.pessoaRepository.filterPessoaPorId(id);
        if (pessoa.length == 0) {
            throw new Error("Pessoa informada inexistente.");
        }

        await this.pessoaRepository.deletarPessoa(id);
        console.log("Service - Delete Pessoa", id);
        return pessoa;
    }

    async filtrarPessoaPorId(id: number): Promise<PessoaEntity[]> {
        const pessoa = await this.pessoaRepository.filterPessoaPorId(id);
        console.log("Service - Filtrar Pessoa por ID", pessoa);
        return pessoa;
    }

    async filtrarPessoaPorNome(name: string): Promise<PessoaEntity[]> {
        const pessoas = await this.pessoaRepository.filterPessoaPorNome(name);
        console.log("Service - Filtrar Pessoa por Nome", pessoas);
        return pessoas;
    }

    async listarTodasPessoas(): Promise<PessoaEntity[]> {
        const pessoas = await this.pessoaRepository.listarTodasPessoas();
        console.log("Service - Listar Todas as Pessoas", pessoas);
        return pessoas;
    }
}
