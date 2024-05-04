import { TestBed } from '@angular/core/testing';

import { A11FocusService } from './a11-focus.service';
import { Renderer2 } from '@angular/core';

describe('A11FocusService', () => {
  let service: A11FocusService;
  let renderer2: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Renderer2,
        {
          provide: Renderer2,
          useValue: {},
        },
      ],
    }).compileComponents();
    service = TestBed.inject(A11FocusService);
    renderer2 = TestBed.inject(Renderer2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(renderer2).toBeTruthy();
  });
});
