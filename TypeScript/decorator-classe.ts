function Log(classe: any) {
    console.log('Log classe prototype', classe.prototype)
    classe.prototype.darTchau();
    
    console.log(Object.keys(classe.prototype));
    
    // console.log("Object.getOwnPropertyNames:", Object.getOwnPropertyNames(classe.prototype));

    const original = classe.prototype;

    for(const key in original){
        console.log('key', key)
        
        const fnOriginal = original[key];
        
        original[key] = function(...args: any[]) {
            console.log('Log inicial na função ' + key);

            const resultado = fnOriginal.apply(this, args);
            
            console.log('Log final na função ' + key);

            return resultado;
        }
    }

    return  classe;
}

@Log
class Pessoa {
    nome: string = 'Lucas';
    idade: number = 26;
    static teste = 'teste'

    falar(teste: string) {
        console.log(teste);
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade.`)
    }

    darTchau(texto: string) {
        console.log('TCHAUUUUUU!!!' + texto);

        return 'retorno';
    }
}

console.log(Pessoa.teste)

const p = new Pessoa();
const p2 = new Pessoa();

p.falar('TESTEE');
console.log(p.darTchau('BYE'));
// p2.falar();

Pessoa.prototype.falar = function () {
    console.log('Sou o falar() alterado!!!');
}

p.falar('TESTEE');
// p2.falar();

// hasOwnProperty -> prototype de object herdado
console.log(p.hasOwnProperty('nome'));
console.log(p.hasOwnProperty('idade'));
console.log(p.hasOwnProperty('endereco'));



