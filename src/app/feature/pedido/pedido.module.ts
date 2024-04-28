import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { MatListModule } from '@angular/material/list';
import { PedidoComponent } from './views/pedido/pedido.component';
import { LayoutModule } from '../../layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { PedidoState } from '../../+state/pedido/pedido.state';
import { NgxsModule } from '@ngxs/store';

const materialModule = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  declarations: [PedidoComponent, ListaProdutosComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    ...materialModule,
    LayoutModule,
    NgxsModule.forFeature([PedidoState]),
  ],
})
export class PedidoModule {}
