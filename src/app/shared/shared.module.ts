import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollViewComponent } from './components/scroll-view/scroll-view.component';

@NgModule({
  declarations: [ScrollViewComponent],
  imports: [CommonModule],
  exports: [ScrollViewComponent],
})
export class SharedModule {}
