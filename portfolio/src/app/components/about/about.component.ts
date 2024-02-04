import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('aboutAnimation', [
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
export class AboutComponent {
  @ViewChild('aboutElement') aboutElement!: ElementRef;

  animationState = 'start';

  checkIfElementIsInViewport() {
    const element = this.aboutElement.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.animationState = 'end';
    } else {
      // this.animationState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfElementIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfElementIsInViewport();
  }
}
