/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários. 
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.
*/
/*
resposta minha
let nomeCompleto : string = 'Andriel Henrique Alves de Lima';
let Idade : number = 22;
let email : string = 'andriel.h@aluno.ifsp.edu.br';
let isAtivo : boolean = true;
*/
/*

2 -Crie um objeto usuario com as seguintes propriedades:

    nome: string, representando o primeiro nome do usuário.
    sobrenome: string, representando o sobrenome do usuário.
    idade: number, representando a idade do usuário.
    contato: objeto com as seguintes propriedades:
    email: string, representando o endereço de e-mail do usuário.
    telefone: string, representando o número de telefone do usuário (opcional).
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.

/* minha respostas
type Usuario = {
    nome : string,
    sobrenome : string,
    idade : number
};
type Contato = {
    email : string,
    telefone: string
};
let usuario: Usuario = {
    nome: "Andriel",
    sobrenome: "Henrique",
    idade: 22,
};
let contato: Contato = {
    email: "andriel.h@aluno.ifsp.edu.br",
    telefone: "1234567"
};
console.log(usuario)
console.log(contato)
*/

let Usuario:{
    nome: string,
    sobrenome:string,
    idade: number,
    contato:{
        email: string
        telefone: string,
    }
}

Usuario ={
    nome: "Andriel" ,
    sobrenome: "Henrique",
    idade: 23,
    contato: {
        email: "andriel.h@Aluno.ifsp.edu.br",
        telefone: "343234234",
    },
};

type Pessoa = {
    nome: string,
    sobrenome:string,
    idade: number,
    contato:{
        email: string
        telefone: string,
    },
};

let Pessoa : {
    nome: "Andriel" ,
    sobrenome: "Henrique",
    idade: 23,
    contato: {
        email: "andriel.h@Aluno.ifsp.edu.br",
        telefone: "343234234",
    },
};

/*

Exercício:
Vamos criar um sistema de gestão de produtos para uma loja online. 
Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:

    nomeProduto: do tipo string, representando o nome de um produto.
    preco: do tipo number, representando o preço do produto.
    disponivel: do tipo boolean, representando se o produto está disponível em estoque ou não.
*/
/* 
let nomeProduto: string = "Trident"
let preco: number = 3
let disponivel: boolean = true
/*

02 - Crie um objeto produto com as seguintes propriedades:

    nome: string, representando o nome do produto.
    preco: number, representando o preço do produto.
    estoque: number, representando a quantidade em estoque do produto.
    categorias: array de strings, representando as categorias às quais o produto pertence.
    Em seguida, imprima todas as variáveis e propriedades do objeto produto usando console.log.

*/
/*
type produto = {
    nome: string,
    preco: number,
    estoque: number,
    categorias: string[]
};

let produto: produto = {
    nome: "Trident",
    preco: 3,
    estoque: 1000,
    categorias: ["Melancia", "Menta", "Morango"]
};

console.log(produto)
*/

let produto: {
    nome: string,
    preco: number,
    estoque: number,
    categorias: string[],
};

produto = {
    nome: "Trident",
    preco: 3,
    estoque: 1000,
    categorias: ["Melancia", "Menta", "Morango"],
};

console.log(produto)