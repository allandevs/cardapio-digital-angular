import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrl: './scroll-view.component.scss',
})
export class ScrollViewComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef<HTMLDivElement>;
  private startX: number = 0;
  private scrollLeft: number = 0;
  scrollContainer!: HTMLDivElement;

  ngAfterViewInit() {
    this.scrollContainer = this.scrollContainerRef.nativeElement;
  }

  start(event: TouchEvent) {
    this.startX = event.touches[0].pageX - this.scrollContainer.offsetLeft;
    this.scrollLeft = this.scrollContainer.scrollLeft;
  }

  move(event: TouchEvent) {
    const x = event.touches[0].pageX - this.scrollContainer.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.scrollContainer.scrollLeft = this.scrollLeft - walk;
  }
}
