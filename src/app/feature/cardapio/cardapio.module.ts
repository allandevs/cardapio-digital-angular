import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '../../layout/layout.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DetalheItemCardapioComponent } from './views/detalhe-item-cardapio/detalhe-item-cardapio.component';
import { MatInputModule } from '@angular/material/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { ItemCarrinhoComponent } from './components/item-carrinho/item-carrinho.component';
import { NgxsModule } from '@ngxs/store';
import { ProdutoState } from '../../+state/cardapio/cardapio.state';
import { PedidoState } from '../../+state/pedido/pedido.state';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

const moduleMaterial = [
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatBadgeModule,
];
const views = [ProdutosComponent, DetalheItemCardapioComponent];
@NgModule({
  declarations: [...views, ItemCarrinhoComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    LayoutModule,
    ...moduleMaterial,
    ReactiveFormsModule,
    NgxsModule.forFeature([ProdutoState, PedidoState]),
    HttpClientModule,
    SharedModule,
  ],
})
export class CardapioModule {}
