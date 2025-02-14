import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfo;
}

interface IInfo {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // transforma o estilo deste componente para global, afeta outros e é afetado.
  // encapsulation: ViewEncapsulation.None, 
  
  // ideal; Estilo de determinado componente não afeta outros
  // estilos globais afetam estilo do componente próprio
  // encapsulation: ViewEncapsulation.Emulated,

  // isolação total; nenhum estilo global afeta este componente
  // e ele não pode afetar nenhum outro estilo, além dele mesmo e filhos.
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {
  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  };
}


  // getFullPrice(){
  //   setTimeout(()=>{
  //     console.log('Set timeout');
  //     this.tipo = 'Teste';
  //   }, 10000)
  //   return 'R$' + this.preco + ',00/Mês'
  // }

  



