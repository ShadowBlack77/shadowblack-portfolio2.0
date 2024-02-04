import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-touch',
  standalone: true,
  imports: [],
  templateUrl: './touch.component.html',
  styleUrl: './touch.component.scss',
  animations: [
    trigger('touchButtonAnimation', [
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
export class TouchComponent {
  @ViewChild('buttonTouchElement') buttonTouchElement!: ElementRef;

  buttonAnimateState = 'start';

  checkIfButtonTouchElementIsInViewport() {
    const element = this.buttonTouchElement.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.buttonAnimateState = 'end';
    } else {
      // this.buttonAnimateState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfButtonTouchElementIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfButtonTouchElementIsInViewport();
  }
}
