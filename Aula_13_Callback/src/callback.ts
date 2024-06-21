export function imprimir( value: any):void{
    console.log("A operação efetuada resultou em: " + value);
}


export function concatenar( a: string, b: string, callback: (param:any)=> void):void{
    var op = a + " " + b;
    callback(op);
}

export function somar( a: number, b: number, callback: (param:any)=> void ):void{
    var op = a + b;
    callback(op);
}

export function inverterTexto(frase: any, callback: (param: any)=> void): void{
    var op = frase.split('').reverse().join('');
    callback(op);
}

export function reverserString(s: string, callback: (param:string)=>void): void{
    const op = s.split('').reverse().join('');
    const resultado = callback(op);
    console.log(resultado);
}

export function exibeFrase( frase: string): string{
    return `A INVERSÃO DA SENTENÇA RESULTOU EM: ${frase.toUpperCase()}`;
}

