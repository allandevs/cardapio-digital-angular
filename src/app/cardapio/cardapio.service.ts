import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { DadosCardapio } from './models';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  private readonly mockUrl = './../../assets/mocks/produtos.json';

  constructor(private http: HttpClient) {}

  carregarDadosCardapio(): Observable<DadosCardapio> {
    return this.http.get<DadosCardapio>(this.mockUrl).pipe(
      delay(1000),
      catchError(error => {
        return throwError(
          () =>
            new Error(
              'Ocorreu um erro. Por favor, tente novamente mais tarde.' +
                JSON.stringify(error)
            )
        );
      })
    );
  }
}
