import { Pedido } from './models';

export class AdicionarPedido {
  static readonly type = '[Pedido] Adicionar';
  constructor(public payload: Pedido) {}
}

export class RemoverPedido {
  static readonly type = '[Pedido] Remover';
  constructor(public pedidoId: number) {}
}
