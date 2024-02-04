import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('footerButtonsAnimation', [
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
export class FooterComponent {
  @ViewChild('footerButtonsAnimations') footerButtonsAnimations!: ElementRef;

  footerButtonsAnimationState = 'start';

  checkIfFooterButtonIsInViewport() {
    const element = this.footerButtonsAnimations.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.footerButtonsAnimationState = 'end';
    } else {
      // this.footerButtonsAnimationState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfFooterButtonIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfFooterButtonIsInViewport();
  }
}
