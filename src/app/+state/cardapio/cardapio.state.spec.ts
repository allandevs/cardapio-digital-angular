import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { CarregarDadosCardapio } from './cardapio.action';

import { of } from 'rxjs';
import { DadosCardapio } from '../../shared/models/cardapio';
import { ProdutoState } from './cardapio.state';
import { CardapioStateModel } from './models/cardapio-state.model';
import { CardapioService } from '../../feature/cardapio/cardapio.service';

class MockCardapioService {
  carregarDadosCardapio() {
    return of({
      categorias: [
        {
          nome: 'Hamburguers',
          itens: [
            {
              nome: 'Clássico',
              preco: 29.9,
              descricao:
                'Carne suculenta de 140g, muçarela derretida, tomate fresco e maionese de alho, servidos em um pão Brioche macio!!',
              imagem:
                'https://img.freepik.com/fotos-gratis/ainda-vida-de-delicioso-hamburguer-americano_23-2149637312.jpg?w=360&t=st=1705718132~exp=1705718732~hmac=90215ab9b71cc583e51283e5c14deb98b7781880b29c709f305764fcd2790508',
            },
          ],
        },
        {
          nome: 'Entradas',
          itens: [
            {
              nome: 'Batata Palito',
              preco: 24.9,
              descricao: 'Porção de batata palito, serve até 2 pessoas.',
              imagem:
                'https://img.freepik.com/fotos-gratis/vista-superior-deliciosas-batatas-fritas-e-molho_23-2149235944.jpg?w=360&t=st=1705764802~exp=1705765402~hmac=7d2f2cbae2afcea8445236a651cdecd7f90b64f2162c193fcd0cf48b360e553d',
            },
          ],
        },
        {
          nome: 'Sobremesas',
          itens: [
            {
              nome: 'MilkShake c/ Chantilly',
              preco: 24.9,
              descricao:
                'chocolate, ovomaltine ou doce de leite com paçoca. 380 ML',
              imagem:
                'https://img.freepik.com/fotos-gratis/bebida-de-cafe-coberta-com-chantilly_140725-2726.jpg?w=740&t=st=1705854413~exp=1705855013~hmac=0fd50eabf062e0fa1886aa20e493c9c6f6dc9cf5a8d7d53d51a2dead2b90b13c',
            },
          ],
        },
        {
          nome: 'Bebidas',
          itens: [
            {
              id: 10,
              nome: 'Refrigerante lata',
              preco: 7.9,
              descricao: '',
              imagem:
                'https://img.freepik.com/fotos-premium/lata-de-bebida-vermelha-com-condensacao-em-cubos-de-gelo_950125-921.jpg?w=740',
            },
          ],
        },
      ],
    } as DadosCardapio);
  }
}

describe('ProdutoState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ProdutoState])],
      providers: [{ provide: CardapioService, useClass: MockCardapioService }],
    });

    store = TestBed.inject(Store);
  });

  it('deve carregar dados do cardápio corretamente', async () => {
    await store.dispatch(new CarregarDadosCardapio());

    const state = store.snapshot() as CardapioStateModel;

    expect(state).toBeDefined();
  });
});
