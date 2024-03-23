export class Produtos {
    id: number;
    name: string;
    descripion: string;
    price: number;

    constructor(id: number, name: string, description: string, price: number){
        this.id = id;
        this.name = name;
        this.descripion = description;
        this.price = price;
    }
}