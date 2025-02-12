// Prototype -> apenas para funções.
// console.log(String.prototype);
// Se caso a função falar ficar dentro do objeto pessoa, ao criar novas instancias, a função falar irá se repetir, e isso causará problemas de memória(copias desnecessarias), por isso deve-se criar um prototype para a function falar.

const Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;

    // this.falar = function () {
    //     console.log(`Olá, me ;chamo ${this.nome} e tenho e tenho ${this.idade}`);
    // }
}

Pessoa.prototype.falar = function () {
    console.log(`Olá, me chamo ${this.nome} e tenho e tenho ${this.idade} anos.`);
}

const p = new Pessoa('Lucas', 25);

const p2 = new Pessoa('Ana', 23);

console.log(p);
console.log(p2);

// para usar o falar (que está no prototype de Pessoa)
console.log(p.falar());
console.log(p2.falar());
//ou
console.log(p.__proto__);
console.log(p2.__proto__);
//adicionar toString para o 'p', pois não possui
console.log(p.toString());

// outro exemplo (adiciona a função 'lucas' para um array)
Array.prototype.lucas = function(){
    // this referencia o array (quem está chamando)
    console.log(this);
    console.log('Lucas');
}

console.log(Array.prototype);
console.log([1, 2, 3].__proto__);
console.log([1, 2, 3].lucas());

// Não necessariamente precisar SER uma função.
Array.prototype.teste = 'Teste';
console.log([1, 2, 3].teste);

// verificar se uma funçao ja existe
if(typeof Array.prototype.lucas === "function"){
    console.log('true')
}else{
    console.log(false);
}

if(typeof Array.prototype.filterArray !== "function"){
    //implementação externa desse "filterArray"
    console.log('true')
    Array.prototype.filterArray = function(){
        // this = array (quem chama)
        console.log(this);
    }
}

console.log([1, 2, 3, 4, 5].filterArray());