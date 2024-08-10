
export class UsuarioRequestsDto {
    id: number;
    idPessoa: number;


    constructor(id?: number, idPessoa?: number) {
        this.id = id || 0;
        this.idPessoa = idPessoa || 0;
    }
}