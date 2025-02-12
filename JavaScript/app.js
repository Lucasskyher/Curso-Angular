// EX 1:
import { somar, operação } from './somar.js';
console.log(operação + ' = ' + somar(1, 1));

import { somar, operação as descricao } from './somar.js';
console.log(descricao + ' = ' + somar(1, 1));

// EX 2:
import operacaoSubtrair from './subtrair.js';
console.log('Subtrair = ' + operacaoSubtrair(2, 1));

// EX 3:
import * as Operacoes from './operacoes.js';
console.log('Multiplicar = ' + Operacoes.multiplicar(2,2));
console.log('Dividir = ' + Operacoes.dividir(10,2));

// EX 4:
import sendLog, { LOG_TYPE_1, LOG_TYPE_2 } from './logs.js';
sendLog(LOG_TYPE_1, 'SOU O TIPO 1');
sendLog(LOG_TYPE_2, 'SOU O TIPO 2');