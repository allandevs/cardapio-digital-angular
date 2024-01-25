import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarrinhoComponent } from './item-carrinho.component';
import { CardapioModule } from '../../cardapio.module';
import { NgxsModule } from '@ngxs/store';

describe('ItemCarrinhoComponent', () => {
  let component: ItemCarrinhoComponent;
  let fixture: ComponentFixture<ItemCarrinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCarrinhoComponent],
      imports: [CardapioModule, NgxsModule.forRoot()],
    });

    fixture = TestBed.createComponent(ItemCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
