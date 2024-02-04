import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  animations: [
    trigger('cvAnimation', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class CvComponent {
  @ViewChild('cvButtonElement') cvButtonElement!: ElementRef;

  cvAnimateState = 'start';

  checkIfCvButtonElementIsInViewport() {
    const element = this.cvButtonElement.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.cvAnimateState = 'end';
    } else {
      // this.cvAnimateState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfCvButtonElementIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfCvButtonElementIsInViewport();
  }
}
