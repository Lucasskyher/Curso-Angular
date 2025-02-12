/*
    O "this" da arrow function será definido no momento da sua criação.
    Ela vai herdar o "this" do seu contexto pai.
    Usar function no lugar de arrow function, o que vai ser herdado é o que está dentro do objeto.
*/

// contexto pai
this.nome = 'TESTE';

const obj = {
    nome: 'Lucas',
    falar: () => {
        console.log(this); //window
        
        setTimeout(() => {
            console.log('setTimeout', this)
        });
    }
}

obj.falar();

// segundo caso *Arrowfn aponta para a instancia que foi criada.
// *Não é possivel criar constructores usando arrowfn.
const Pessoa = function(){
    this.nome = 'Felipe';
    this.falar2 = () => {
        console.log('Falar =>', this);
    }
    console.log('Pessoa =>', this);
}

// instancia criada
const p = new Pessoa;
p.falar2();

// terceiro caso
console.log('this 1', this);
const arrow = () => {
    console.log(this)
} 

arrow();

