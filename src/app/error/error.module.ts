import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './views/error/error.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
