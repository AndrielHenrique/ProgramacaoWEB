"use strict";
/*
Exercício 1
Crie uma função que receba uma lista de números como parâmetro e retorne o
maior número da lista.
*/
function maiornumero(...x) {
    let maior = x[0];
    for (let i = 0; i < x.length; i++) {
        if (x[i] > maior) {
            maior = x[i];
        }
    }
    return maior;
}
console.log("Ex 1: O maior numero é: ");
console.log(maiornumero(2, 3, 4, 454, 45, 12, 12));
/*
Exercício 2
Desenvolva uma função que receba um número como parâmetro e verifique se
ele é par ou ímpar. Retorne true se for par e false se for ímpar.
*/
function parouimpar(x) {
    if (x % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Ex 2: Numero Par ou Impar:");
console.log(parouimpar(22));
console.log(parouimpar(23));
/*
Exercício 3
Implemente uma função que calcule a média aritmética de um array de números
e retorne o resultado. Utilize essa função para calcular a média de diferentes
conjuntos de números.
*/
function mediaAritmetica(...x) {
    let media = 0;
    let soma = 0;
    for (let i = 0; i < x.length; i++) {
        soma += x[i];
    }
    media = soma / x.length;
    return media;
}
console.log("Ex 3: Media Aritmetica");
console.log(mediaAritmetica(10, 9, 8, 7)); //tem que dar 8.5
console.log(mediaAritmetica(2, 3, 4, 5)); //tem que dar 3.5
console.log(mediaAritmetica(10, 10)); //tem que dar 10
/*
Exercício 4
Crie uma função que receba uma string como parâmetro e retorne a mesma
string com todas as letras em caixa alta. Utilize essa função para converter
diferentes strings.
*/
function caixaalta(x) {
    return x.toUpperCase();
}
console.log(caixaalta("Ex 4: Converter para caixa alta"));
console.log(caixaalta("caixa alta"));
console.log(caixaalta("miau"));
/*
Exercício 5
Desenvolva uma função que determine se um número é primo ou não. Retorne
true se for primo e false se não for
*/
function numeroPrimo(x) {
    let i = 2;
    while (i <= x / 2) {
        if (x % i++ == 0) {
            return false;
        }
    }
    return true;
}
console.log("Ex 5: Numeros Primos");
console.log(numeroPrimo(3)); //tem q dar true
console.log(numeroPrimo(4)); //tem q dar false
console.log(numeroPrimo(5)); //tem q dar true
console.log(numeroPrimo(8)); //tem q dar false
console.log(numeroPrimo(9)); //tem q dar false
/*
Exercício 6
Implemente uma função que inverta a ordem dos elementos em um array.
Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
*/
function InverterOrdem(...x) {
    return x.reverse();
}
console.log("Ex 6: Inverter ordem dos elementos em um array");
console.log(InverterOrdem(1, 2, "teste"));
console.log(InverterOrdem(2, 3, 4, "amongus"));
/*
Exercício 7
Crie uma função que receba um valor e uma porcentagem como parâmetros. A
função deve retornar o valor acrescido da porcentagem indicada.
*/
function ValorPorcentagem(valor, porcentagem) {
    let indicada = valor + ((valor * porcentagem) / 100);
    return indicada;
}
console.log("Ex 7: Valor acrescido da porcentagem indicada");
console.log(ValorPorcentagem(10, 75));
console.log(ValorPorcentagem(9, 25));
console.log(ValorPorcentagem(3, 65));
/*
Exercício 8
Crie uma função que receba uma string e retorne a mesma string, mas com as
palavras em ordem reversa.
*/
function OrdemReversa(x) {
    return x.split('').reverse().join('');
}
console.log("Ex 8: Palavras em ordem reversa");
console.log(OrdemReversa("miau"));
console.log(OrdemReversa("abacate"));
/*
Exercício 9
Implemente uma função que retorne a soma de todos os números pares em um
array.
*/
function somapares(...x) {
    let somar = 0;
    let i = 0;
    for (; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            somar += x[i];
        }
    }
    return somar;
}
console.log("Ex 9: Somar numeros pares");
console.log(somapares(2, 4, 5, 6, 7, 8, 9, 10)); // 2+4+6+8+10 = 30
console.log(somapares(7, 7, 7, 7, 7)); // vai dar 0 nao tem numero par
console.log(somapares(6, 6, 6, 6, 6)); // vai dar 30
console.log(somapares(20, 21, 22, 23, 24)); // 20+22+24 = 66
/*
Exercício 10
Crie uma função que calcule o fatorial de um número. Utilize essa função para
calcular o fatorial de diferentes números.
*/
function Fatorial(x) {
    let fat = 1;
    if (x != 1) {
        for (let i = 1; i <= x; i++) {
            fat = i * fat;
        }
        return fat;
    }
    else {
        return x;
    }
}
console.log("Ex 10: Fatorial de um numero");
console.log(Fatorial(1)); //fatorial de 1 é o proprio 1
console.log(Fatorial(2)); //2
console.log(Fatorial(5)); //120
console.log(Fatorial(6)); //720
console.log(Fatorial(7)); //5040
