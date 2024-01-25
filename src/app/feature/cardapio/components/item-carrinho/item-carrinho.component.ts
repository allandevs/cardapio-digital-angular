import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PedidoState } from '../../../../+state/pedido/pedido.state';
import { Observable } from 'rxjs';
import { Pedido } from '../../../../shared/models/pedido';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-item-carrinho',
  templateUrl: './item-carrinho.component.html',
  styleUrl: './item-carrinho.component.scss',
})
export class ItemCarrinhoComponent {
  private store = inject(Store);
  private bottomSheet = inject(MatBottomSheet);

  @Select(PedidoState.getPedidos) pedido$!: Observable<Pedido[]>;

  irParaPedido() {
    this.bottomSheet.dismiss();
    this.store.dispatch(new Navigate(['pedido']));
  }

  calcularTotalItensCarrinho() {
    const itensPedido = this.store.selectSnapshot(PedidoState.getPedidos);
    let totalItensCarrinho = 0;

    for (const item of itensPedido) {
      totalItensCarrinho += item.quantidade;
    }

    return totalItensCarrinho;
  }
}
