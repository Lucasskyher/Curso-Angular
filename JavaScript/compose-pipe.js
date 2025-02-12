const positivarNumero = (num) => Math.abs(num);
const multiplicarPor4 = (num) => num * 4;
const somar2 = (num) => num + 2;
const subtrair1 = (num) => num - 1;

const processar = (num) => {
    // const positivo = positivarNumero(num);
    // multiplicarPor4(positivo);
    console.log(multiplicarPor4(positivarNumero(num)));
}

processar(-50);

//ou

// const pipe = (fn1, fn2) => {
//     return(valor) => {
//         return fn2(fn1(valor));
//     }
// }

// pipe = executa da esquerda para a direita

const pipe = (...fns) => {
    return (valor) => {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, valor)
    }
}

// compose = executa da direita para a esquerda

const compose = (...fns) => {
    return (valor) => {
        return fns.reduceRight((acc, fn) => {
            return fn(acc);
        }, valor)
    }
}


const positivarNumeroEMultiplicarPor4 = pipe(positivarNumero, multiplicarPor4);
const positivarMultiplicarPor4ESomar2 = pipe(positivarNumero, multiplicarPor4, somar2);

// resultados diferentes
const positivarMultiplicarPor4ESomar2ESubtrair1C = compose(positivarNumero, multiplicarPor4, somar2, subtrair1);

const positivarMultiplicarPor4ESomar2ESubtrair1P = pipe(positivarNumero, multiplicarPor4, somar2, subtrair1);

console.log(positivarNumeroEMultiplicarPor4(-40));
console.log(positivarMultiplicarPor4ESomar2(-40));

console.log('Resultados diferentes: Compose, e Pipe');
console.log(positivarMultiplicarPor4ESomar2ESubtrair1C(-40));
console.log(positivarMultiplicarPor4ESomar2ESubtrair1P(-40));

// const pipe2 = (fn1, fn2, fn3) => {
//     return(valor) => {
//         return fn3(fn2(fn1(valor)));
//     }
// }

// const positivarMultiplicarPor4ESomar2 = pipe2(positivarNumero, multiplicarPor4, somar2);

// console.log(positivarMultiplicarPor4ESomar2(50));






