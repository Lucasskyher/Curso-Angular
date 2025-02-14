//teste utilizando style aqui, e no arquivo scss ao mesmo tempo.

import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  //segundo arquivo deste array de styles tem maior precedencia se os nomes dos seletoers forem iguais dentro do css, se não pega a maior especificação dos seletores como maior precedencia.
  styleUrls: ['./card-button-cancel.component.scss','./card-button-cancel-2.component.scss'],
  //opcinal (estilo aqui)
  // styles: [
  //   `
  //     .card-cancel-button {
  //       font-size: 16px;
  //       text-align: center;
  //       margin-top: 10px;
  //       border-radius: 25px;
  //       background-color: crimson;
  //       cursor: pointer;
  //       padding: 10px;
  //       font-weight: bold;
  //     }
  //   `,
  //   `
  //     .card-cancel-button {
  //       background-color: black;
  //     }
  //   `
  // ],
})
export class CardButtonCancelComponent {

}
