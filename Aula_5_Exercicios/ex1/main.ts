import { Animal } from "./animalinterface"
import { Ave } from "./ave"
import { Mamimifero } from "./mamifero"

function imprimeAnimal(animal: Animal){
    console.log(`O animal ${animal.nome} eh Lactante: ${animal.ehLactante()}`);
    console.log(`O animal ${animal.nome} eh Oviparo: ${animal.ehoviparo}`);
}

let ave = new Ave("Pato");
let mamifero = new Mamimifero("Gato")

imprimeAnimal(ave);
imprimeAnimal(mamifero);