import { Component, HostBinding } from '@angular/core';

import * as packages from './../../package.json';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostBinding('attr.app-version') version = packages.version;
}
