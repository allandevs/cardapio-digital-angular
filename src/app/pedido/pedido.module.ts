import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { MatListModule } from '@angular/material/list';
import { PedidoComponent } from './views/pedido/pedido.component';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialModule = [MatListModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [PedidoComponent],
  imports: [CommonModule, PedidoRoutingModule, ...materialModule, LayoutModule],
})
export class PedidoModule {}
