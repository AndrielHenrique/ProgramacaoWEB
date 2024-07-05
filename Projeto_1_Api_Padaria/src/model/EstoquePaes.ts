export class EstoquePaes {
    id: number;
    modalidadeID: number;
    quantidade: number;
    precoVenda: number;

    constructor(modalidadeID: number, quantidade: number, precoVenda: number) {
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
        this.id = this.gerarID();
    }
    private gerarID(): number {
        return Date.now();
    }
}
