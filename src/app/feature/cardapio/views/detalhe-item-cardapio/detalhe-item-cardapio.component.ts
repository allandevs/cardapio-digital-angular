import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';

import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AdicionarPedido } from '../../../../+state/pedido/pedido.action';
import { Pedido } from '../../../../shared/models/pedido';

import { ItemCardapio } from '../../../../shared/models/cardapio';
import { Util } from '../../../../utils/util';
import { A11FocusService } from '../../../../shared/util/a11-focus.service';

@Component({
  selector: 'app-detalhe-item-cardapio',
  templateUrl: './detalhe-item-cardapio.component.html',
  styleUrl: './detalhe-item-cardapio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalheItemCardapioComponent implements OnInit, AfterViewInit {
  itemCardapio!: ItemCardapio;
  formulario: FormGroup;
  quantidadeAtual: number = 1;
  private util = inject(Util);
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private bottomSheetRef = inject(
    MatBottomSheetRef<DetalheItemCardapioComponent>
  );
  @ViewChild('titulo') titulo!: ElementRef;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ItemCardapio,
    private readonly a11: A11FocusService
  ) {
    this.formulario = this.fb.group({
      quantidade: [1, { disabled: true }],
    });
    this.formulario.controls['quantidade'].disable();
  }

  ngAfterViewInit() {
    this.a11.focus(this.titulo);
  }
  ngOnInit() {
    this.itemCardapio = this.data;
  }

  fechar(): void {
    this.bottomSheetRef.dismiss();
  }

  adicionar() {
    this.setQuantidadeAtual(this.quantidadeAtual + 1);

    this.atualizarQuantidadeAtual();
  }

  remover() {
    if (this.quantidadeAtual > 1) {
      this.setQuantidadeAtual(this.quantidadeAtual - 1);
      this.atualizarQuantidadeAtual();
    }
  }

  private atualizarQuantidadeAtual() {
    this.quantidadeAtual = this.formulario.get('quantidade')?.value;
  }

  private setQuantidadeAtual(quantidade: number) {
    this.formulario.get('quantidade')?.setValue(quantidade);
  }

  adicionarAoPedido(item: ItemCardapio) {
    const { id, nome, preco } = item;

    const novoItemPedido: Pedido = {
      id: id + this.util.gerarNumeroAleatorio(),
      nome,
      preco,
      quantidade: this.quantidadeAtual,
    };

    this.store.dispatch(new AdicionarPedido(novoItemPedido));
    this.fechar();
  }
}
