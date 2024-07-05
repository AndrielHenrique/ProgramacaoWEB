export class ModalidadePaes {
    id: number;
    name: string;
    vegano: boolean;

    constructor(name: string, vegan: boolean) {
        this.id = this.gerarID();
        this.name = name;
        this.vegano = vegan;
    }

    private gerarID(): number {
        return Date.now();
    }
}