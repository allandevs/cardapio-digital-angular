import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosComponent } from './produtos.component';
import { NgxsModule } from '@ngxs/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [NgxsModule.forRoot()],
    });

    fixture = TestBed.createComponent(ProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
