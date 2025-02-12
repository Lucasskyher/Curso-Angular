//deve-se importar todas as outras interfaces aqui
import { Endereco } from './endereco.interface'
import { NumeroPessoa } from './numero-pessoa.interface'

export interface Pessoa {
    nomei: string,
    idadei?: number, //? = propriedade opcional
    telefones?: NumeroPessoa[],
    endereco?: Endereco,
}