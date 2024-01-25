import { Component, Input, inject } from '@angular/core';

import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
@Component({
  selector: 'layout-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  @Input() loading!: boolean | null;
  @Input() titulo!: string;

  private store = inject(Store);

  irParaCardapio(): void {
    this.store.dispatch(new Navigate(['cardapio']));
  }

  irParaPedido(): void {
    this.store.dispatch(new Navigate(['pedido']));
  }
}
