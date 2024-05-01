import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, throwError } from 'rxjs';
import {
  DadosCardapio,
  ItemCardapio,
  ItensMaisPedido,
} from '../../shared/models/cardapio';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  private readonly mockUrl = './../../assets/mocks/produtos.json';
  private readonly mockUrlMaisPedidos =
    './../../assets/mocks/itens-mais-pedidos.json';

  constructor(private http: HttpClient) {}

  carregarDadosCardapio(): Observable<DadosCardapio> {
    return this.http.get<DadosCardapio>(this.mockUrl).pipe(
      delay(1000),
      catchError(error => {
        return throwError(
          () =>
            new Error(
              'Ocorreu um erro ao tentar carregar os dados do cardápio' +
                JSON.stringify(error)
            )
        );
      })
    );
  }

  carregarItensMaisPedidos(): Observable<ItemCardapio[]> {
    return this.http.get<ItensMaisPedido>(this.mockUrlMaisPedidos).pipe(
      delay(1000),
      map(response => response.itens),
      catchError(error => {
        return throwError(
          () =>
            new Error(
              'Ocorreu um erro ao tentar carregar os itens mais pedidos' +
                JSON.stringify(error)
            )
        );
      })
    );
  }
}
