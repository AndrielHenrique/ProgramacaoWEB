/* 1) Suponha que estamos desenvolvendo um sistema de gerenciamento de animais
em um zoológico. Vamos criar uma interface Animal que define a estrutura básica
de um animal, e duas classes Mamifero e Ave que implementam essa interface em
arquivos separados. */

/*
export interface Animal {
    invertebrado(): boolean;
    vertebrado(): boolean;
    mamifero(): boolean;
    oviparo(): boolean;  
} */

export interface Animal {
    nome: string;
    ehoviparo(): boolean;
    ehLactante(): boolean;
}
