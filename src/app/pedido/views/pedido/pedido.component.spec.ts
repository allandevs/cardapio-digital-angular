import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComponent } from './pedido.component';
import { PedidoModule } from '../../pedido.module';
import { NgxsModule, Store } from '@ngxs/store';

describe('PedidoComponent', () => {
  let component: PedidoComponent;
  let fixture: ComponentFixture<PedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoComponent],
      imports: [NgxsModule.forRoot(), PedidoModule],
      providers: [Store],
    });

    fixture = TestBed.createComponent(PedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
