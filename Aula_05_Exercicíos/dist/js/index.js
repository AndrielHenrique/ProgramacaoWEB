"use strict";
/*Exercício 01 - Escreva uma função em TypeScript que aceite um array de números como
parâmetro e retorne o array ordenado em ordem crescente
*/
function OrdemCrescente(...x) {
    let maior = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] > i) {
            maior = x[i];
        }
    }
    return x;
}
console.log(OrdemCrescente(5, 6, 3, 1, 2, 4));
/*Exercício 02 - Escreva uma função em TypeScript que calcule a média ponderada de um
conjunto de valores, dados seus valores e pesos correspondentes.
*/
/*Exercício 03 - Crie uma função em TypeScript que valide se um CPF é válido ou não. O CPF é
composto por 11 dígitos numéricos. Considere a entrada como numérica. Para ser válido, ele deve
seguir algumas regras específicas de formação e ter dígitos verificadores corretos, conforme a
informações a seguir
*/ 
