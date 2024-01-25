import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { CarregarDadosCardapio } from './cardapio.action';
import { CardapioService } from '../../cardapio/cardapio.service';
import { catchError, map, tap } from 'rxjs';
import { DadosCardapio } from './models';
import { Navigate } from '@ngxs/router-plugin';

export interface CardapioStateModel {
  categorias?: DadosCardapio;
  processando$?: boolean;
}

@State<CardapioStateModel>({
  name: 'cardapio',
  defaults: {},
})
@Injectable()
export class ProdutoState {
  constructor(private cardapioService: CardapioService) {}

  @Selector()
  static processandoDados(state: CardapioStateModel): boolean {
    return state.processando$ || false;
  }

  @Selector()
  static itensCardapio(state: CardapioStateModel) {
    return state.categorias;
  }

  @Action(CarregarDadosCardapio)
  carregarDadosCardapio(ctx: StateContext<CardapioStateModel>) {
    if (ctx.getState().categorias) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        processando$: false,
      });
      return;
    }

    ctx.setState({
      processando$: true,
    });

    return this.cardapioService.carregarDadosCardapio().pipe(
      map(categorias => ({
        ...ctx.getState(),
        categorias,
        processando$: false,
      })),
      tap(newState => ctx.setState(newState)),
      catchError(error => {
        console.error(error);
        return ctx.dispatch(new Navigate(['/error']));
      })
    );
  }
}
