import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-baner',
  standalone: true,
  imports: [],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.scss',
  animations: [
    trigger('h2Animation', [
      state('start', style({
        opacity: 0,
        transform: 'translateY(-100px)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('pAnimation', [
      state('start', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ]),
      transition('start => end', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class BanerComponent {
  @ViewChild('h2Element') h2Element!: ElementRef;
  @ViewChild('pElement') pElement!: ElementRef;

  animationH2State = 'start';
  animationPState = 'start';

  checkIfH2ElementIsInViewport() {
    const element = this.h2Element.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.animationH2State = 'end';
    }
  }

  checkIfPElementIsInViewport() {
    const element = this.pElement.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.animationPState = 'end';
    } else {
      // this.animationPState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfH2ElementIsInViewport();
    this.checkIfPElementIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfH2ElementIsInViewport();
    this.checkIfPElementIsInViewport();
  }
}
