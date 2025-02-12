const falar = function(salario, profissao) {
    console.log(`Olá, eu me chamo ${this.nome}, tenho ${this.idade} anos, sou ${profissao} e ganho R$${salario}.`);
}

const lucas = {
    nome: 'Lucas',
    idade: 25,
}

const laura = {
    nome: 'Laura',
    idade: 20
}


console.log('-------CALL-------');
// ex polyfill: (fn.call(thisp(obj), val, i, this)){
falar.call(laura, 1000, 'Dentista');


falar.call(lucas, 2000, 'Desenvolvedor');

console.log('-------APPLY-------');
const array = [7800, 'Astronauta']
falar.apply(laura, array);

falar.apply(lucas, [1500, 'Frentista']);

console.log('-------BIND-------');
const falarLaura = falar.bind(laura, 5000, 'Modelo');
console.log(falarLaura());

const falarLucas = falar.bind(lucas, 4000, 'Engenheiro');
console.log(falarLucas());



