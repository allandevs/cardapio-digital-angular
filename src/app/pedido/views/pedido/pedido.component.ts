import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PedidoState } from '../../../+state/pedido/pedido.state';
import { Observable } from 'rxjs';
import { Pedido } from '../../../+state/pedido/models';
import { RemoverPedido } from '../../../+state/pedido/pedido.action';
import { Navigate } from '@ngxs/router-plugin';

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
