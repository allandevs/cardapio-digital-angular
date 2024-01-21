import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheItemCardapioComponent } from './detalhe-item-cardapio.component';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DetalheItemCardapioComponent', () => {
  let component: DetalheItemCardapioComponent;
  let fixture: ComponentFixture<DetalheItemCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheItemCardapioComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: MatBottomSheetRef,
          useValue: {},
        },
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: {},
        },
      ],
    });

    fixture = TestBed.createComponent(DetalheItemCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
