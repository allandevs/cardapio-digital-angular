import { Pedido } from '../../shared/models/pedido';

export class AdicionarPedido {
  static readonly type = '[Pedido] Adicionar';
  constructor(public payload: Pedido) {}
}

export class RemoverPedido {
  static readonly type = '[Pedido] Remover';
  constructor(public pedidoId: number) {}
}
