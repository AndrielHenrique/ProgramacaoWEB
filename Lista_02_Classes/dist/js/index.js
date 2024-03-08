"use strict";
/*01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
instância de Carro
*/
class Carro {
    get getModelo() {
        return this.modelo;
    }
    get getAnoLançamento() {
        return this.anoLançamento;
    }
    get getPortas() {
        return this.portas;
    }
    get getMotor() {
        return this.motor;
    }
    set setModelo(modelo) {
        this.setModelo = modelo;
    }
    set setAnoLançamento(anoLançamento) {
        this.anoLançamento = anoLançamento;
    }
    set setPortas(portas) {
        this.portas = portas;
    }
    set setMotor(motor) {
        this.setMotor = motor;
    }
    calcularIdadeDoCarro() {
        return 2024 - this.anoLançamento;
    }
    constructor(modelo, anoLançamento, portas, motor) {
        this.modelo = modelo;
        this.anoLançamento = anoLançamento;
        this.portas = portas;
        this.motor = motor;
    }
}
let carro = new Carro("Ferrari", 2008, 2, "v8");
console.log(carro, carro.calcularIdadeDoCarro());
//02 – Desenvolva uma classe Calculadora em TypeScript //
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1() {
        return this.valor1;
    }
    get getValor2() {
        return this.valor2;
    }
    set setValor1(valor1) {
        this.valor1 = valor1;
    }
    set setValor2(valor2) {
        this.valor2 = valor2;
    }
    Soma() {
        return this.valor1 + this.valor2;
    }
    Subtracao() {
        if (this.valor2 > this.valor1) {
            return 1;
        }
        else {
            return this.valor1 - this.valor2;
        }
    }
    Multiplicacao() {
        return this.valor1 * this.valor2;
    }
    Divisao() {
        if (this.valor2 != 0) {
            return this.valor1 / this.valor2;
        }
        return 1;
    }
    Porcentagem() {
        let porcentagem = this.valor1 / this.valor2;
        return porcentagem * 100;
    }
}
let soma = new Calculadora(77, 2);
console.log(`A soma de ${soma.getValor1} + ${soma.getValor2} eh =`, soma.Soma());
soma.setValor1 = 99;
soma.setValor2 = 10;
console.log(`A soma de ${soma.getValor1} + ${soma.getValor2} eh =`, soma.Soma());
let subtracao = new Calculadora(88, 12);
console.log(`A subtracao de ${subtracao.getValor1} - ${subtracao.getValor2} eh = `, subtracao.Subtracao());
subtracao.setValor1 = 90;
soma.setValor2 = 10;
console.log(`A subtracao de ${subtracao.getValor1} - ${subtracao.getValor2} eh = `, subtracao.Subtracao());
let multiplicacao = new Calculadora(2, 99);
console.log(`A multiplicao ${multiplicacao.getValor1} * ${multiplicacao.getValor2} de eh =`, multiplicacao.Multiplicacao());
multiplicacao.setValor1 = 99;
multiplicacao.setValor2 = 2;
console.log(`A multiplicao ${multiplicacao.getValor1} * ${multiplicacao.getValor2} de eh =`, multiplicacao.Multiplicacao());
let divisao = new Calculadora(99, 2);
console.log(`A divisao de ${divisao.getValor1} / ${divisao.getValor2} eh = `, divisao.Divisao());
divisao.setValor1 = 18;
divisao.setValor2 = 2;
console.log(`A divisao de ${divisao.getValor1} / ${divisao.getValor1} eh = `, divisao.Divisao());
let porcentagem = new Calculadora(30, 80);
console.log(`A porcentagem de ${porcentagem.getValor1} em relacao a ${porcentagem.getValor2} eh = `, porcentagem.Porcentagem());
porcentagem.setValor1 = 40;
porcentagem.setValor2 = 90;
console.log(`A porcentagem de ${porcentagem.getValor1} em relacao a ${porcentagem.getValor2} eh = `, porcentagem.Porcentagem());
//03 – Desenvolva uma classe Produto em TypeScript//
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    get getNome() {
        return this.nome;
    }
    get getPreco() {
        return this.preco;
    }
    get getQuantidadeEmEstoque() {
        return this.quantidadeEmEstoque;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setPreco(preco) {
        this.preco = preco;
    }
    set setQuantidadeEmEstoque(quantidadeEmEstoque) {
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    calcularValorTotalEmEstoque() {
        return this.quantidadeEmEstoque * this.preco;
    }
    reporEstoque(quantidade) {
        return this.quantidadeEmEstoque += quantidade;
    }
    vender(quantidade) {
        if (quantidade < this.quantidadeEmEstoque) {
            return this.quantidadeEmEstoque -= quantidade;
        }
        console.log("Estoque insuficiente");
        return 1;
    }
}
let produto = new Produto("Trident melancia", 3, 20);
console.log(produto);
console.log(produto.calcularValorTotalEmEstoque());
console.log(produto.reporEstoque(10));
console.log(produto.vender(29));
produto.setNome = "Chocolate";
produto.setPreco = 6;
produto.setQuantidadeEmEstoque = 20;
console.log(produto);
console.log(`Calcular valor do produto ${produto.getNome}, Preço: ${produto.getPreco} * Quantidade no estoque:${produto.getQuantidadeEmEstoque} = `, produto.calcularValorTotalEmEstoque());
console.log(produto.reporEstoque(3));
console.log(produto.vender(10));
console.log(produto.vender(20)); //msg para estoque insuficiente
