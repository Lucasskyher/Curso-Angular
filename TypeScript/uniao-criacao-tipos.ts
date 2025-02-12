//////////////////// união e criação de tipos ////////////////////
console.log('\n //////////////////// união e criação de tipos //////////////////// \n ');

const log = (param: string | number | boolean) => {

}

log('abobora')
log(12345)
log(true)

interface Pessoa3 {
    nome3: string,
    idade3: number,
}

interface Carro {
    modelo: string,
    dataFabricacao: string,
}

type PessoaCarro = Pessoa3 & Carro;

const teste: PessoaCarro = {
    nome3: 'Lucas',
    idade3: 21,
    modelo: 'BMW',
    dataFabricacao: '14/11/2020',
}

console.log(teste)

type PessoaOuCarro = Pessoa3 | Carro;

const testeou: PessoaOuCarro = {
    nome3: 'Fabri',
    idade3: 23,
    modelo: 'Hyundai',
}

console.log(testeou)

const log2 = (param: PessoaOuCarro) => {
    if ('nome3' in param) {
        console.log(param.nome3)
    } else {
        console.log(param.modelo)
    }
}

log2(testeou);

// melhor opção (separar funções)

const logPessoa = (param: Pessoa3) => {
    console.log(param.nome3)
}

const logCarro = (param: Carro) => {
    console.log(param.modelo)
}


