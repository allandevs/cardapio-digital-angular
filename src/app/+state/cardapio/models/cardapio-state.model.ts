import { DadosCardapio } from '../../../shared/models/cardapio';

export interface CardapioStateModel {
  categorias?: DadosCardapio;
  processando$?: boolean;
}
