import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { Navigate } from '@ngxs/router-plugin';
import { PedidoState } from '../../../../+state/pedido/pedido.state';
import { Pedido } from '../../../../shared/models/pedido';
import { RemoverPedido } from '../../../../+state/pedido/pedido.action';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss',
})
export class PedidoComponent {
  private store = inject(Store);

  @Select(PedidoState.getPedidos) pedido$!: Observable<Pedido[]>;

  removerItemPedido(item: Pedido): void {
    this.store.dispatch(new RemoverPedido(item.id));
  }

  irParaCardapio(): void {
    this.store.dispatch(new Navigate(['cardapio']));
  }
}
