//////////////////// Tipar Funções ////////////////////
console.log('\n //////////////////// Tipar Funções //////////////////// \n ');

const func: Function = () => 1;
const func2: Function = (param: string) => param;
//                                                        implementação
const func3: (param: number, param2: number) => number = (teste: number, teste2: number) => {
    return teste + teste2;
};

console.log(func3(3, 5));

// interfaces

interface Pessoa4 {
    nome4: string,
    idade4: number,
    falar4: (nome: string, idade: number) => string,
}

const pessoa4: Pessoa4 = {
    nome4: 'Lucas',
    idade4: 29,
    falar4: (nome: string, idade: number) => `Olá, meu nome é ${nome} e eu tenho ${idade} anos de idade.`,
};

console.log(pessoa4.falar4(pessoa4.nome4, pessoa4.idade4));

// classes

class Pessoa5 implements Pessoa4 {
    nome4 = 'Lucas';
    idade4 = 26;

    falar4 = (nome: string, idade: number) => `CLASSE !!! Olá, meu nome é ${nome} e eu tenho ${idade} anos de idade.`;
}

const pessoa5: Pessoa5 = new Pessoa5();
console.log(pessoa5.falar4(pessoa5.nome4, pessoa5.idade4));


//outra tipagem de função
type FunctionFalar = (nome: string, idade: number) => string;

const funcFalar: FunctionFalar = (nome: string, idade: number) => `Olá, meu nome é ${nome} e eu tenho ${idade} anos de idade.`;

console.log(funcFalar('Laura', 15));

//tipar callbacks
// criando a tipagem                                   callback tipado
type FuncCallback = (texto: string) => void;
const funcComCallback = (nome: string, idade: number, cbFn: FuncCallback) => {
    const text = `Olá, meu nome é ${nome} e eu tenho ${idade} anos de idade.`;

    cbFn(text);
}

funcComCallback('Lucas', 25, (texto: string) => {
    console.log('Sou o callback. ' + texto);
});
