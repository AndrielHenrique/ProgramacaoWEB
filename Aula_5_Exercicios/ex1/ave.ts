/*import {Animal} from "./animalinterface";
export class Ave implements Animal {
    invertebrado(): boolean{
        return false;
    }
    vertebrado(): boolean{
        return true;
    }
    mamifero(): boolean{
        return false;
    }
    oviparo(): boolean{
        return true;
    }
*/

import{Animal} from "./animalinterface"
export class Ave implements Animal {
    nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
    ehoviparo(): boolean {
        return true;    
    }
    ehLactante(): boolean {
        return this.nome =="orinitorrinco";
    }
}