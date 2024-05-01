export class ItemCardapio {
  id!: number;
  nome!: string;
  preco!: number;
  descricao!: string;
  imagem!: string;
}

export interface ItensMaisPedido {
  itens: ItemCardapio[];
}
