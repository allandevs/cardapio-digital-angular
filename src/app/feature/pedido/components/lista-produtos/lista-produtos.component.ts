import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../../../../shared/models/pedido';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss',
})
export class ListaProdutosComponent {
  @Input() pedidos$!: Observable<Pedido[]>;
  @Output() removerItem: EventEmitter<Pedido> = new EventEmitter();

  emitRemoverItem(item: Pedido) {
    this.removerItem.emit(item);
  }
}
