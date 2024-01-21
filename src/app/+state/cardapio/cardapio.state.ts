import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { CarregarDadosCardapio } from './cardapio.action';
import { CardapioService } from '../../cardapio/cardapio.service';
import { tap } from 'rxjs';
import { DadosCardapio } from './models';

export interface CardapioStateModel {
  categorias?: DadosCardapio;
  processando: boolean;
}

@State<CardapioStateModel>({
  name: 'cardapio',
  defaults: {
    processando: false,
  },
})
@Injectable()
export class ProdutoState {
  constructor(private cardapioService: CardapioService) {}

  @Selector()
  static processandoDados(state: CardapioStateModel): boolean {
    return !!state.processando;
  }

  @Selector()
  static itensCardapio(state: CardapioStateModel) {
    return state.categorias;
  }

  @Action(CarregarDadosCardapio)
  carregarDadosCardapio(ctx: StateContext<CardapioStateModel>) {
    ctx.patchState({
      processando: true,
    });
    return this.cardapioService.carregarDadosCardapio().pipe(
      tap(categorias => {
        ctx.setState({
          ...ctx.getState(),
          categorias,
          processando: false,
        });
      })
      //catchError(() => ctx.dispatch(new Navigate(['/error'])))
    );
  }
}
