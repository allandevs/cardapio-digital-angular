import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '../layout/layout.module';
import { MatTabsModule } from '@angular/material/tabs';

const moduleMaterial = [MatButtonModule, MatCardModule, MatTabsModule];

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    LayoutModule,
    ...moduleMaterial,
  ],
  exports: [ProdutosComponent],
})
export class CardapioModule {}
