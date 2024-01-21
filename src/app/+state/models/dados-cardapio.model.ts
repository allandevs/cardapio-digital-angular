import { ItemCardapio } from '.';

export class DadosCardapio {
  categorias!: itemCategoria[];
}

interface itemCategoria {
  nome: string;
  itens: ItemCardapio[];
}
