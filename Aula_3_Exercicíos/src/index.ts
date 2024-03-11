/*Exercício 01 - Escreva uma função em TypeScript que aceite um array de números como
parâmetro e retorne o array ordenado em ordem crescente
*/

function OrdemCrescente(...x: number[]): number[]{
    return x.sort();       //meudeus era so 1 return, o sort coloca por ordem crescente começando pelo menor valor -_-
}
    

console.log(OrdemCrescente(5,6,3,1,2,4), OrdemCrescente(77,55,33,11,55,67));

/*Exercício 02 - Escreva uma função em TypeScript que calcule a média ponderada de um
conjunto de valores, dados seus valores e pesos correspondentes.
*/

function MediaPonderada(notas: number[], peso: number[]): number{
    let somamedia = 0;
    let somatoriopeso = 0;
    for(let i = 0; i<3; i++){
            somamedia += notas[i] * peso[i];
            somatoriopeso += peso[i];
        }   
    return somamedia/somatoriopeso;
}
console.log(MediaPonderada([10,10,10],[0.75,0.75,2]), MediaPonderada([9,6,7],[0.75,0.75,2]));

/*Exercício 03 - Crie uma função em TypeScript que valide se um CPF é válido ou não. O CPF é
composto por 11 dígitos numéricos. Considere a entrada como numérica. Para ser válido, ele deve
seguir algumas regras específicas de formação e ter dígitos verificadores corretos, conforme a
informações a seguir
*/
function ValidarCPF (cpf: number[]): boolean{
   return true;
    }

    

console.log(ValidarCPF([5,2,9,9,8,2,2,4,7,2,5]))
