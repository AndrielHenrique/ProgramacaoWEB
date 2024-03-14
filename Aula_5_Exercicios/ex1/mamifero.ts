/*import {Animal} from "./animalinterface";
export class Mamifero implements Animal {
    invertebrado(): boolean{
        return false;
    }
    vertebrado(): boolean{
        return true;
    }
    mamifero(): boolean{
        return true;
    }
    oviparo(): boolean{
        return false;
    }
}
*/

import { Animal } from "./animalinterface";

export class Mamimifero implements Animal{
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    ehoviparo(): boolean {
        return false;
    }
    ehLactante(): boolean {
        return this.nome =="orinitorrinco";
    }
}