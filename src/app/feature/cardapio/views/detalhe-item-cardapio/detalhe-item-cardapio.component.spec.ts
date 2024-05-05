import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheItemCardapioComponent } from './detalhe-item-cardapio.component';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CardapioModule } from '../../cardapio.module';

import { NgxsModule } from '@ngxs/store';
import { Util } from '../../../../utils/util';
import { A11FocusService } from '../../../../shared/util/a11-focus.service';

describe('DetalheItemCardapioComponent', () => {
  let component: DetalheItemCardapioComponent;
  let fixture: ComponentFixture<DetalheItemCardapioComponent>;
  let bottomSheetRefMock: jest.Mocked<MatBottomSheetRef>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let a11FocusService: A11FocusService;

  beforeEach(() => {
    bottomSheetRefMock = {
      dismiss: jest.fn(),
    } as unknown as jest.Mocked<MatBottomSheetRef>;
    TestBed.configureTestingModule({
      declarations: [DetalheItemCardapioComponent],
      imports: [ReactiveFormsModule, CardapioModule, NgxsModule.forRoot()],
      providers: [
        FormBuilder,
        {
          provide: MatBottomSheetRef,
          useValue: bottomSheetRefMock,
        },
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: {},
        },
        {
          provide: Util,
          useValue: {},
        },
        {
          provide: A11FocusService,
          useValue: { focus: jest.fn() },
        },
      ],
    });

    fixture = TestBed.createComponent(DetalheItemCardapioComponent);
    component = fixture.componentInstance;
    a11FocusService = TestBed.inject(A11FocusService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve fechar o componente MatBottomSheetRef corretamente', () => {
    component.fechar();

    expect(bottomSheetRefMock.dismiss).toHaveBeenCalled();
  });

  it('deve ter 3 item após executar o método "adicionar" duas vezes', () => {
    for (let index = 0; index < 2; index++) {
      component.adicionar();
    }

    expect(component.quantidadeAtual).toEqual(3);
  });

  it('deve ter 1 item após executar o método "remover" duas vezes', () => {
    component.quantidadeAtual = 3;

    for (let index = 0; index < 2; index++) {
      component.remover();
    }

    expect(component.quantidadeAtual).toEqual(1);
  });
});
