import { DadosCardapio, ItemCardapio } from '../../../shared/models/cardapio';

export interface CardapioStateModel {
  categorias?: DadosCardapio;
  itensMaisPedidos?: ItemCardapio[];
  processando$?: boolean;
}
