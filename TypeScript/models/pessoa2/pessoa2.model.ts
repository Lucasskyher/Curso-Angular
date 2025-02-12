import { Endereco2 } from "./endereco2.model";
import { Telefone2 } from "./telefone2.model";

export class Pessoa2 {
    nomec: string;
    idadec: number;
    telefonec: Telefone2[];
    enderecoc: Endereco2;

    constructor(nomec: string, idadec: number, telefonec: Telefone2[], enderecoc: Endereco2){
        this.nomec = nomec;
        this.idadec = idadec;
        this.telefonec = telefonec;
        this.enderecoc = enderecoc;
    }

    falar(){
        console.log(`Meu nome é ${this.nomec} e eu tenho ${this.idadec} anos de idade`)
    }

    mostrarTelefone(){
        console.log(`Meu número é ${ this.telefonec[0].numero2}`)
    }
}