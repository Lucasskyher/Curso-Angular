//////////////////// objeto ////////////////////
console.log('\n //////////////////// objeto //////////////////// \n');

//não recomendavel. Melhor utilizar interfaces ou classes
let meuObjeto: { nome: string, idade?: number } = {
    nome: 'Lucas',
    idade: 22, //por ter '?' idade é opcional no objeto
}

console.log(typeof meuObjeto); //ojbect

//criar objetos com propriedades dinâmicas (string para string)
let meuObjeto2: { [key: string]: string } = {
    nome: 'Jorge',
    pais: 'Malásia',
    idade: 'Teste',
}
