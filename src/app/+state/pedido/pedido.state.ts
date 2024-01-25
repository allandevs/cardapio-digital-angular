import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Pedido } from '../../shared/models/pedido';
import { AdicionarPedido, RemoverPedido } from './pedido.action';
import { Injectable } from '@angular/core';
import { PedidoStateModel } from './models/pedido-state.model';

@State<PedidoStateModel>({
  name: 'pedido',
  defaults: {
    pedidos: [],
  },
})
@Injectable()
export class PedidoState {
  @Selector()
  static getPedidos(state: PedidoStateModel): Pedido[] {
    return state.pedidos;
  }

  @Action(AdicionarPedido)
  adicionarPedido(
    ctx: StateContext<PedidoStateModel>,
    action: AdicionarPedido
  ) {
    const state = ctx.getState();
    ctx.setState({
      pedidos: [...state.pedidos, action.payload],
    });
  }

  @Action(RemoverPedido)
  removerPedido(ctx: StateContext<PedidoStateModel>, action: RemoverPedido) {
    const state = ctx.getState();
    ctx.setState({
      pedidos: state.pedidos.filter(pedido => pedido.id !== action.pedidoId),
    });
  }
}
