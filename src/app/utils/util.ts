// Gera um número aleatório de três dígitos

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Util {
  /**
   * Gera um número aleatório de três dígitos
   */
  gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 900) + 800;
  }
}
