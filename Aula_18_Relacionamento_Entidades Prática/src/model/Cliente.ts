export class Cliente {
    id: number;
    name: string;
    cpf: string;
    data_nascimento: Date;

    constructor(id?: number, name?: string, cpf?: string, data_nascimento?: Date){
        this.id = id || this.gerarID() ;
        this.name = name || '';
        this.cpf = cpf || '';
        this.data_nascimento = new Date || data_nascimento;
    }

    private gerarID():number{
        return Date.now();
    }
}