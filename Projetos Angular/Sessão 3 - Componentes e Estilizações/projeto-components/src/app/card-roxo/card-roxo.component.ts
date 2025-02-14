import { Component } from '@angular/core';

interface ICarrinho {
  qtd: number,
  valor: number,
}

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {
  carrinho: ICarrinho = {
    qtd: 99,
    valor: 45,

  }
}
