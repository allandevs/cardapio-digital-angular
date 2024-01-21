import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '../layout/layout.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DetalheItemCardapioComponent } from './views/detalhe-item-cardapio/detalhe-item-cardapio.component';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const moduleMaterial = [
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [ProdutosComponent, DetalheItemCardapioComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    LayoutModule,
    ...moduleMaterial,
  ],
  exports: [ProdutosComponent],
})
export class CardapioModule {}
