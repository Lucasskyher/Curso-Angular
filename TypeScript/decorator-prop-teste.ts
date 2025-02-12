function ClassDecorator(targetClass: any) {
    console.log('targetClass', targetClass.prototype);
}

// function PropDecorator(targetClassPrototype: any, propertyName: string, descriptor?: PropertyDescriptor) {
//     console.log('targetClassPrototype', targetClassPrototype);
//     console.log('propertyName', propertyName);

//     let value: any;

//     const setter = function (newValue: any) {
//         value = newValue + 1;
//     }
//     const getter = function () {
//         return value;
//     }

//     Object.defineProperty(targetClassPrototype, propertyName,{
//         get: getter,
//         set: setter,
//     });

// }

function PropDecorator(target: any, propertyKey: string) {
    const setter = function(this: any, newValue: string) {
        this[`_${propertyKey}`] = newValue + 1; // Modifica o valor com "1" ao final
    };

    const getter = function(this: any) {
        return this[`_${propertyKey}`];
    };

    // Define explicitamente o getter e setter na propriedade
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// @ClassDecorator
class Pessoa3 {
    @PropDecorator
    nome: string = 'Lucas';
    falar() { }
}

const p3 = new Pessoa3();
const p32 = new Pessoa3();
p32.nome = 'Mestre';
p3.nome = 'Fulano'
console.log('p3.nome', p3)
console.log('p32.nome', p32)

// const objs = {
//     nome: 'Lucas',
//     idade: 34,
//     get infos(){
//         return this.nome + ' ' + this.idade;
//     },

//     set infos(value){
//         this.nome = value;
//     }
// }

// console.log(objs.infos);

// objs.infos = 'Atualizado';

// console.log(objs.infos);

class MinhaClassex {
    private _nome: string = 'lucas';

    get nome() {
        console.log('get nome');
        //....
        return this._nome
    }

    set nome(newValue) {
        console.log('set nome');
        //...
        this._nome = newValue;
    }
}

const mcx = new MinhaClassex();

// get nome
console.log(mcx.nome);

mcx.nome = 'Fulano';

// set nome

console.log(mcx.nome);

// retorna apenas _nome, pois o outro metodo 'nome' não é enumerable
for (const key in mcx) {
    console.log(key)
}

// compartilhado para todas as instancias pois get e set está no prototype de MinhaClassex
const mcx2 = new MinhaClassex();
mcx2.nome = 'Fulaninho';
console.log(mcx2.nome);


// //definir propriedades de 'nome'
// const objs = {
//     nome: 'Lucas',
//     idade: 34,
// }

// Object.defineProperty(objs, 'nome', {
//     get() {
//         return this._nome;
//     },

//     set(value){
//         // _nome -> evitar loop (se caso fosse this.nome)
//         this._nome = value + ' atualizado';
//     }
// });

// objs.nome = 'Fulaninho';

// console.log(objs.nome);

// console.log(objs);





