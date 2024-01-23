import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardapioService } from './cardapio.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
import { DadosCardapio } from './models';

describe('CardapioService', () => {
  let service: CardapioService;
  let httpMock: jest.Mocked<HttpClient>;

  beforeEach(() => {
    httpMock = {
      get: jest.fn(),
    } as unknown as jest.Mocked<HttpClient>;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CardapioService);
    service = new CardapioService(httpMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve carregar dados do cardápio corretamente', async () => {
    const mockData: DadosCardapio = {
      categorias: [
        {
          nome: 'Teste',
          itens: [
            {
              nome: 'Item de Teste',
              preco: 10.0,
              descricao: 'Descrição',
              imagem: 'imagem.jpg',
            },
          ],
        },
      ],
    };

    httpMock.get.mockReturnValue(of(mockData));

    const result = await firstValueFrom(service.carregarDadosCardapio());

    expect(result).toEqual(mockData);

    expect(httpMock.get).toHaveBeenCalledWith(service['mockUrl']);
  });
});
