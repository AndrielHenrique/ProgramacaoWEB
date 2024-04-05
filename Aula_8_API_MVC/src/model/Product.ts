export class Product {
    id: number;
    name: string;
    descripition: string;
    price: number;

    constructor(name: string, descripition: string, price: number) {
        this.name = name;
        this.descripition = descripition;
        this.price = price;
        this.id = this.gerarId();
    }

    private gerarId(): number {
        return Date.now();
    }
    
}