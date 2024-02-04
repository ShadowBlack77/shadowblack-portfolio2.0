import { Component, ElementRef, ViewChild, HostListener } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('blockOne', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('blockTwo', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .5s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s .5s ease-in-out')
      ])
    ]),
    trigger('blockThree', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s 1s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s 1s ease-in-out')
      ])
    ])
  ]
})
export class ServicesComponent {
  @ViewChild('firstBlock') firstBlock!: ElementRef;
  @ViewChild('secondBlock') secondBlock!: ElementRef;
  @ViewChild('thirdBlock') thirdBlock!: ElementRef;

  blockOneAnimationState = 'start';
  blockTwoAnimationState = 'start';
  blockThirdAnimationState = 'start';

  checkIfFirstBlockElementIsInViewport() {
    const element = this.firstBlock.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.blockOneAnimationState = 'end';
    } else {
      // this.blockOneAnimationState = 'start';
    }
  }

  checkIfSecondBlockElementIsInViewport() {
    const element = this.secondBlock.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.blockTwoAnimationState = 'end';
    } else {
      // this.blockTwoAnimationState = 'start';
    }
  }

  checkIfThirdBlockElementIsInViewport() {
    const element = this.thirdBlock.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport ) {
      this.blockThirdAnimationState = 'end';
    } else {
      // this.blockThirdAnimationState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfFirstBlockElementIsInViewport();
    this.checkIfSecondBlockElementIsInViewport();
    this.checkIfThirdBlockElementIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfFirstBlockElementIsInViewport();
    this.checkIfSecondBlockElementIsInViewport();
    this.checkIfThirdBlockElementIsInViewport();
  }
}
