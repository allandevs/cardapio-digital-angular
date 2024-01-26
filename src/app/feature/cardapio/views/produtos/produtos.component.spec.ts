import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosComponent } from './produtos.component';
import { NgxsModule } from '@ngxs/store';

import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { DetalheItemCardapioComponent } from '../detalhe-item-cardapio/detalhe-item-cardapio.component';
import { CardapioModule } from '../../cardapio.module';
import { ItemCardapio } from '../../../../shared/models/cardapio';

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
      imports: [NgxsModule.forRoot(), CardapioModule],
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
      id: 12345,
      nome: 'Item de Teste',
      preco: 10.0,
      descricao: 'Descrição',
      imagem: 'imagem.jpg',
    };

    component.abrirItemCardapio(itemMock);

    expect(bottomSheetMock.open).toHaveBeenCalledWith(
      DetalheItemCardapioComponent,
      {
        data: itemMock,
      }
    );
  });
});
