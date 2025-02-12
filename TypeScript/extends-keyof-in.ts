//////////////////// Extends, Keyof, In e Interfaces ////////////////////
console.log('\n //////////////////// Tipos Genéricos com interfaces //////////////////// \n ');

// Interfaces
interface PessoaInt <T> {
    nome: T,
    idade: number,
    falar: (param: T) => T,
}

// Extends
interface Funcionario<T> extends PessoaInt<T>{
    salario: number;
}

const pessoaint: PessoaInt<boolean> = {
    nome: true,
    idade: 26,
    falar: (param: boolean) => false,
};


type MinimoPessoa<T extends PessoaInt<string>> = T;

const funcionario: MinimoPessoa<Funcionario<string>> = {
    salario: 1000,
    nome: 'Lucas',
    idade: 20,
    falar: (param: string) => 'Faleiiiii, ' + param,
}

console.log(funcionario.falar('Falado.'));

// Keyof
//pegar as propriedades de uma estrutura e alocar em uma tipagem, para só aceitar essas propriedades
type Chaves<T> = keyof T;

const chavesPessoa: Chaves<PessoaInt<string>> = 'idade';

//pegar as tipagens das propriedades de uma estrutura e alocar em um tipo também, para ele só aceitar essas tipagens 
type TiposDasChaves<T> = T[keyof T];

const tiposChavesPessoa: TiposDasChaves<PessoaInt<string>> = 6564646;

const outrotipos: TiposDasChaves<{ teste: boolean}> = true

// In
type objDinamico<T> = { [K in keyof T]: T[K] };

const obj: objDinamico<{ salario: number, status: boolean }> = {
    salario: 1000, 
    status: false,
};

// Análise de Função
interface Teste { salario: number, status: boolean };

function transformarObjeto<T, U extends T[keyof T]>(obj: T, transFn: (item: T[keyof T]) => U): { [K in keyof T]: U }{
    const novoObj = {} as { [K in keyof T]: U};
    return novoObj;
}

const testef: Teste = {
    salario: 1000,
    status: true,
}

transformarObjeto(testef, (item: number|boolean) => {
    return 2+2;
});