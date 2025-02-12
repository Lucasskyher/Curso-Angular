//////////////////// interfaces ////////////////////
console.log('\n //////////////////// interfaces //////////////////// \n');

//dica: criar pasta interfaces com arquivos .ts relacionados a cada interface
//ex: ./interface/pessoa/pessoa.interface.ts (interface NumeroPessoa, e interface Pessoa)

import { Pessoa } from './interfaces/pessoa/pessoa.interface';

let pessoa: Pessoa = {
    nomei: 'Lucas',
    idadei: 22,
    telefones: [
        {
            ddd: '000',
            numero: '123456789'
        },
        {
            ddd: '555',
            numero: '987654321'
        }
    ],
    endereco: {
        rua: 'getulio',
        numero: '12345'
    }
};

console.log(pessoa.endereco);

let pessoas: Pessoa[] = [];

pessoas = [
    {
        nomei: 'Lucas',
        idadei: 24
    },
    {
        nomei: 'Ana',
        idadei: 22,
    },
    {
        nomei: 'Jorge',
    },
]

console.log(pessoas);
