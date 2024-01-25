import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Pedido } from '../../shared/models/pedido';
import { AdicionarPedido, CalcularTotal, RemoverPedido } from './pedido.action';
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

  @Selector()
  static getTotal(state: PedidoStateModel) {
    return state.total;
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

  @Action(CalcularTotal)
  calcularTotal(ctx: StateContext<PedidoStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      total: PedidoState.calcularTotal(state.pedidos),
    });
  }

  private static calcularTotal(pedidos: Pedido[]): number {
    return pedidos.reduce(
      (total, pedido) => total + pedido.quantidade * pedido.preco,
      0
    );
  }
}
