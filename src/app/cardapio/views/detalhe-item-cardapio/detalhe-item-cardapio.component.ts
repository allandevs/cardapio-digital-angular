import { Component, Inject } from '@angular/core';
import { ItemCardapio } from '../../models';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-detalhe-item-cardapio',
  templateUrl: './detalhe-item-cardapio.component.html',
  styleUrl: './detalhe-item-cardapio.component.scss',
})
export class DetalheItemCardapioComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<DetalheItemCardapioComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ItemCardapio
  ) {}

  obterDadosItemCardapio(): ItemCardapio {
    return this.data;
  }

  fechar(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
