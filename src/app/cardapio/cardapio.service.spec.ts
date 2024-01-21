import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardapioService } from './cardapio.service';

describe('CardapioService', () => {
  let service: CardapioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CardapioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
