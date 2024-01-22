import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosComponent } from './produtos.component';
import { NgxsModule } from '@ngxs/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ItemCardapio } from '../../models';
import { DetalheItemCardapioComponent } from '../detalhe-item-cardapio/detalhe-item-cardapio.component';

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;
  let bottomSheetMock: jest.Mocked<MatBottomSheet>;

  beforeEach(() => {
    bottomSheetMock = {
      open: jest.fn(),
    } as unknown as jest.Mocked<MatBottomSheet>;

    TestBed.configureTestingModule({
      declarations: [ProdutosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [NgxsModule.forRoot()],
      providers: [
        {
          provide: MatBottomSheet,
          useValue: bottomSheetMock,
        },
      ],
    });

    fixture = TestBed.createComponent(ProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o componente DetalheItemCardapio com os dados corretos', () => {
    const itemMock: ItemCardapio = {
      nome: 'Item de Teste',
      preco: 10.0,
      descricao: 'Descrição',
      imagem: 'imagem.jpg',
    };

    // Chama o método a ser testado
    component.abrirItemCardapio(itemMock);

    // Verifica se a função open foi chamada corretamente
    expect(bottomSheetMock.open).toHaveBeenCalledWith(
      DetalheItemCardapioComponent,
      {
        data: itemMock,
      }
    );
  });
});
