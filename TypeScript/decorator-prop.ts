interface LengthError {
    propName: string,
    propLength: number,
    minLength: number,
    description: string
}

interface LengthValidator {
    errors: LengthError[]
}

function MinLenghtValidator(minLength: number) {
    return function (targetClassPrototype: any, propertyName: string) {

        const setter = function (this: any, newValue: any) {
            this[`_${propertyName}`] = newValue
            if (typeof newValue !== 'string') return;

            //se caso Remover o implements interface de PessoaP, remover this.errors e usar (this: any) em vez de this dentro dessa classe, deve-se usar esta lógica abaixo para adicionar this.errors
            const HAS_ERRORS_ARR = this.hasOwnProperty('errors');
            if(!HAS_ERRORS_ARR){
                // this['errors'] = [];
                //     ou
                Object.defineProperty(this, 'errors', {
                    value: [],
                    writable: true,
                });
            }

            this.errors = this.errors.filter((obje:LengthError) => obje.propName != propertyName);

            const HAS_MIN_LENGTH = newValue.length >= minLength;
            if (HAS_MIN_LENGTH) return;

            const errorObj: LengthError = {
                propName: propertyName,
                propLength: newValue.length,
                minLength: minLength,
                description: `A propriedade ${propertyName} deve ter no mínimo ${minLength} caracteres.`,
            };

            this.errors.push(errorObj);
        }

        const getter = function (this: any) {
            return this[`_${propertyName}`];
        }

        Object.defineProperty(targetClassPrototype, propertyName, {
            get: getter,
            set: setter,
        })
    }
}


class PessoaP implements LengthValidator {
    errors: LengthError[] = [];
   
    @MinLenghtValidator(10)
    nome: string;
    @MinLenghtValidator(10)
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    enviarFormulario() {
        console.log('this.errors', this.errors);

        if (this.errors.length === 0) {
            console.log('Formulário enviado com sucesso!')
        } else {
            console.log('Erro ao enviar formulário')
        }

    }
}

const px = new PessoaP('Lucas', 'Pinheirooooooooo');

px.nome = 'Lu';
px.nome = 'Lucaaaaaaaaaaaaas';

px.enviarFormulario();

console.log(px);