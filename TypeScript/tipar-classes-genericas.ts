//////////////////// Tipar Classes Genéricas ////////////////////
console.log('\n //////////////////// Tipar Classes Genéricas //////////////////// \n ');

class Armazenador<T, U> {
    salvarObjeto(objToSave: T) {
        console.log('Objeto salvo!', objToSave)
    }

    deletarObjeto(objToDelete: T) {
        console.log('Objeto deletado!', objToDelete)
    }

    substituirPorObjeto(objOriginal: T, objNovo: U) {
        console.log('Objeto', objOriginal, ' substituido por ', objNovo)
    }
}

//                         Tipagem do <T>
interface PessoaT { nome: string, idade: number, };

type PessoaU = { nome: string, idade: number, pais: string};

const arm: Armazenador<PessoaT, PessoaU> = new Armazenador();
arm.deletarObjeto({nome: 'lucas', idade: 20});

arm.substituirPorObjeto({nome: 'lucas', idade: 20}, {nome: 'Maka', idade: 29, pais: 'Aruba'})