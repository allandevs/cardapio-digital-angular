import { Component, OnInit, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ProdutoState } from '../../../../+state/cardapio/cardapio.state';
import { CarregarDadosCardapio } from '../../../../+state/cardapio/cardapio.action';
import { DetalheItemCardapioComponent } from '../detalhe-item-cardapio/detalhe-item-cardapio.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {
  DadosCardapio,
  ItemCardapio,
} from '../../../../shared/models/cardapio';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent implements OnInit {
  @Select(ProdutoState.itensCardapio) produtos$!: Observable<DadosCardapio>;

  @Select(ProdutoState.processandoDados) processando$!: Observable<boolean>;

  private store = inject(Store);
  private bottomSheet = inject(MatBottomSheet);
  exibirCarrinho = signal(true);

  ngOnInit(): void {
    this.store.dispatch(new CarregarDadosCardapio());
  }

  abrirItemCardapio(item: ItemCardapio): void {
    const SheetRef = this.bottomSheet.open(DetalheItemCardapioComponent, {
      data: item,
    });

    SheetRef?.afterDismissed().subscribe(() => {
      this.exibirCarrinho.set(true);
    });

    SheetRef?.afterOpened().subscribe(() => {
      this.exibirCarrinho.set(false);
    });
  }
}
