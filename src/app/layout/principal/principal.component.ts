import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  @Input() loading!: boolean | null;
}
