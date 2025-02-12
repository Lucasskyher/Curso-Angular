// ex
class Pessoa2 {
    nome: string = 'Lucas';
    falar() { }

}

class Funcionario2 extends Pessoa2 {
    funcao: string = 'Desenvolvedor';

    constructor () {
        super();

        this.nome
    }

    trabalhar () {
        this.falar();
    }
}

const f = new Funcionario2();
f.falar();

console.log('Pessoa2.prototype', Pessoa2.prototype);
console.log('Funcionario2.prototype', Funcionario2.prototype)


//decorator factory
function MeuDecorator(compName: string){
    return function MeuDecorator<T extends { new (...args: any[]): {} }> (classe: T): T {
        return class extends classe {
            novaProp: string = 'Sou nova!';
            isComponent = true;
            compName: string = compName;

            novoMetodo() { 
                console.log('novoMetodo compName => ', compName);
            }
        }
    }
}


//decorators -> retorno de classe recebida ('MinhaClasse') com novas propriedades

// function MeuDecorator<T extends { new (...args: any[]): {} }> (classe: T): T {
//     return class extends classe {
//         novaProp: string = 'Sou nova!';
//         isComponent = true;
//         compName: string = compName;

//         // constructor(...args: any[]){
//         //     super(...args);

//         //     this.compName = args[2];

//         //     console.log('this.compName =>', this.compName);

//         //     console.log(args)
//         // }

//         novoMetodo() { 
//             console.log('novoMetodo compName => ', compName);
//         }
//     }
// }

// passando parametro 'Comp1' para decorator e substitui a classe original
@MeuDecorator('Comp1')
class MinhaClasse{
    teste: string = 'teste';

    meuMetodo() { }

    // constructor(nome: string, idade: number){
    //     this.teste = nome;

    //     console.log('idade =>', idade);

    //     console.log('this.teste =>', this.teste)
    // }
}

// new MinhaClasse('teste', 22, 'teste2'); = erro no typescript
// const mc = new (MinhaClasse as any)('teste const', 22, 'teste comp');
const mc = new MinhaClasse();

//novaProp é criado em tempo de execução (console.log(mc.novaProp); = erro no typescript)
console.log((mc as any).novaProp);
(mc as any).novoMetodo();

console.log(MinhaClasse.prototype);

