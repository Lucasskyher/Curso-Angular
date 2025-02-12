//////////////////// classes ////////////////////
console.log('\n //////////////////// classes //////////////////// \n');

import { Endereco2 } from './models/pessoa2/endereco2.model';
import { Pessoa2 } from './models/pessoa2/pessoa2.model'
import { Telefone2 } from './models/pessoa2/telefone2.model';

let pessoa2: Pessoa2 = new Pessoa2(
    'Lucas x',
    22,
    [
        new Telefone2('123', '99999999'),
    ],
    new Endereco2('Rua x', '1234'),
);

pessoa2.falar();
pessoa2.mostrarTelefone();
console.log(pessoa2.enderecoc.rua2)