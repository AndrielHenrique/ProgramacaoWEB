import { stringParaData } from "../../util/DataUtil";

export class EmprestimoRequestsDto {
    id: number;
    idLivro: number;
    usuarioID: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;

    constructor(id?: number, idLivro?: number, usuarioID?: number, dataEmprestimo?: string, dataDevolucao?: string) {
        this.id = id || 0;
        this.idLivro = idLivro || 0;
        this.usuarioID = usuarioID || 0;
        this.dataEmprestimo = stringParaData(dataEmprestimo || '');
        this.dataDevolucao = stringParaData(dataDevolucao || '');
    }
}