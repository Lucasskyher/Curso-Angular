function teste() {
    return 5;
}

const valor = teste();

console.log(valor);

const valor2 = teste;

console.log(valor2);

console.log(valor2());

function teste2() {
    const num = 5;
    return function () {
        return num
    }
}

const valor3 = teste2();

console.log(valor3);

const valor4 = teste2()();

console.log(valor4);

function counter(num2){
    let acc = 0;

    return function(){
        acc = acc + num2;
        return acc;
    }
}

const incrementFive = counter(valor4);

console.log(incrementFive());

console.log(incrementFive());

console.log(incrementFive());

console.log(incrementFive());



