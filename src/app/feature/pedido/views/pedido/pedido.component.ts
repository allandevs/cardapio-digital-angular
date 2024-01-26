import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { Navigate } from '@ngxs/router-plugin';
import { PedidoState } from '../../../../+state/pedido/pedido.state';
import { Pedido } from '../../../../shared/models/pedido';
import {
  CalcularTotal,
  RemoverPedido,
} from '../../../../+state/pedido/pedido.action';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss',
})
export class PedidoComponent {
  private store = inject(Store);

  constructor() {
    this.calcularTotalPedido();
  }

  @Select(PedidoState.getPedidos) pedido$!: Observable<Pedido[]>;
  @Select(PedidoState.getTotal) totalPedido$!: Observable<number>;

  removerItemPedido(item: Pedido): void {
    this.store.dispatch(new RemoverPedido(item.id));
    this.calcularTotalPedido();
  }

  irParaCardapio(): void {
    this.store.dispatch(new Navigate(['cardapio']));
  }

  private calcularTotalPedido(): void {
    this.store.dispatch(new CalcularTotal());
  }

  finalizarPedido() {
    alert('OPS, está funcionalidade está em desenvolvimento');
  }
}
