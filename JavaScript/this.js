// const falar = function() {
//     this.pais = 'Brasil'
//     console.log(`Olá, eu me chamo ${this.nome} e tenho ${this.idade} anos.`);
// }

// const pessoa = {
//     nome: 'Lucas',
//     idade: 25,
// }

// pessoa.falar = falar;

// pessoa.falar();

// const pessoa2 = {
//     nome: 'Laura',
//     idade: 20
// }

// pessoa2.falar = falar;

// pessoa2.falar();

// console.log(pessoa2);

function Pessoa(n, i){
    this.nome = n;
    this.idade = i;
    
    this.falar = function(){
        console.log(this.nome, this.idade);
    }
}

const p = new Pessoa('felipe', 26);
console.log(p.falar());

/** 
    Com functions regulares nós temos 4 opções de comportamento do "this".
    1 - Caso esteja em um método de um objeto, ela vai apontar para esse objeto.
    2 - Caso esteja em uma instância de um objeto, ela vai apontar para essa instância.
    3 - Caso esteja em uma função regular que não está diretamente ligada a um objeto, ela vai apontar pro objeto "window" ou "global" (NodeJs).
        3.1 - Caso esteja sendo utilizado o "use strict" o "this" fica undefined. É necessário utilizar o "window".
    4 - Caso esteja em uma função que foi chamada via "call()", "apply()", ou "bind()", ela vai apontar para o objeto do primeiro parâmetro dessas funções.
*/


// ***CASO 1***
console.log('***CASO 1***');

const pessoa = {
    nome: 'Felipe',
    falar(){
        console.log(this.nome);
    },
}

pessoa.falar();

// ***CASO 2***
console.log('***CASO 2***');

const Carro = function (modelo){
    this.modelo = modelo;
    this.acelerar = function(){
        console.log(this.modelo);
    };
};

const c = new Carro('BMW');
c.acelerar();

// ***CASO 3***
console.log('***CASO 3***');

// "use strict"
// function logar(){
//     console.log(this);
// }

// logar();

const objeto = {
    nome: 'Felipe',
    falar() {
        console.log('this 1', this);

        return function(){
            console.log('this 2', this);
        }
    }
}

objeto.falar()();

// não apontar para  window. Os 2 'this' apontam para o mesmo objeto
const objeto2 = {
    nome: 'Felipe',
    falar() {
        console.log('this 1', this);

        setTimeout(function(){
            console.log('this 2', this)
        }.bind(this), 1000);
    }
}

objeto2.falar;

// ***CASO 4***
console.log('***CASO 4***');

const digitar = function() {
    console.log(this, this.nome);
}

const obj = {
    nome: 'Lucas',
}

digitar.call(obj)



