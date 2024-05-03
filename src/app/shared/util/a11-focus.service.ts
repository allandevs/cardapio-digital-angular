import { ElementRef, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class A11FocusService {
  constructor(private ngZone: NgZone) {}

  focus(element: ElementRef): void {
    if (element) {
      this.elementFocus(element.nativeElement);
    } else {
      console.error('Element not found.');
    }
  }

  private elementFocus(element: HTMLElement): void {
    element.removeAttribute('aria-hidden');
    element.setAttribute('tabIndex', '0');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        element.focus();
      }, 10);
    });
  }
}
