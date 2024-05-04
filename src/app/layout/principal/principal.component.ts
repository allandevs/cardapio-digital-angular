import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
} from '@angular/core';

import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { A11FocusService } from '../../shared/util/a11-focus.service';
@Component({
  selector: 'layout-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent implements AfterViewInit {
  @Input() loading!: boolean | null;
  @Input() titulo!: string;

  @ViewChild('buttonPrincipal') buttonPrincipal!: ElementRef;

  private store = inject(Store);
  private a11 = inject(A11FocusService);

  ngAfterViewInit(): void {
    this.a11.focus(this.buttonPrincipal);
  }

  irParaCardapio(): void {
    this.store.dispatch(new Navigate(['cardapio']));
  }

  irParaPedido(): void {
    this.store.dispatch(new Navigate(['pedido']));
  }
}
