import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { ItemCardapio } from '../../models';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-detalhe-item-cardapio',
  templateUrl: './detalhe-item-cardapio.component.html',
  styleUrl: './detalhe-item-cardapio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalheItemCardapioComponent implements OnInit {
  itemCardapio!: ItemCardapio;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<DetalheItemCardapioComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ItemCardapio
  ) {}

  ngOnInit() {
    this.itemCardapio = this.data;
  }

  fechar(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
