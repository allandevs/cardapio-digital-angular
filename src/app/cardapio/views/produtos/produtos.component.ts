import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosCardapio } from '../../models';
import { Select, Store } from '@ngxs/store';
import { ProdutoState } from '../../../+state/cardapio/cardapio.state';
import { CarregarDadosCardapio } from '../../../+state/cardapio/cardapio.action';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent implements OnInit {
  @Select(ProdutoState.itensCardapio) produtos$!: Observable<DadosCardapio>;

  @Select(ProdutoState.processandoDados) processando$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new CarregarDadosCardapio());
  }
}
