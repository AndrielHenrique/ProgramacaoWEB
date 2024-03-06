/*01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
instância de Carro
*/

class Carro{
    private modelo: string;
    private anoLançamento: number;
    private portas: number;
    private motor: string;

    get getModelo(){
        return this.modelo;
    }

    get getAnoLançamento(){
        return this.anoLançamento;
    }

    get getPortas(){
        return this.portas;
    }

    get getMotor(){
        return this.motor;
    }

    set setModelo(modelo:string){
        this.setModelo = modelo;
    }

    set setAnoLançamento(anoLançamento: number){
        this.anoLançamento = anoLançamento;
    }

    set setPortas(portas:number){
        this.portas = portas;
    }

    set setMotor(motor: string){
        this.setMotor = motor;
    }

    calcularIdadeDoCarro(anoLançamento: number): number{
        let dataAtual:number = 2024;
        return dataAtual - anoLançamento;
    }

    constructor(modelo:string, anoLançamento: number, portas: number, motor: string){
        this.modelo =modelo;
        this.anoLançamento =anoLançamento;
        this.portas =portas;
        this.motor = motor;

    }
}

let carro = new Carro("Ferrari", 2008, 2, "v8")
console.log(carro, carro.calcularIdadeDoCarro(carro.getAnoLançamento));