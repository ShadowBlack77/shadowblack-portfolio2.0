import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('experienceAnimation', [
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
export class ExperienceComponent {
  @ViewChild('experienceElement') experienceElement!: ElementRef;
  showedIndex: number | null = null;

  experienceAnimationState = 'start';

  checkIfExperienceElementIsInViewPort() {
    const element = this.experienceElement.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= -800 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 300 
      // &&
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.experienceAnimationState = 'end';
    } else {
      // this.experienceAnimationState = 'start';
    }
  }

  showText(event: MouseEvent, index: number) : void {
    this.showedIndex = index;
  }

  resetShowText(index: number): void {
    if (this.showedIndex === index) {
      this.showedIndex = null;
    }
  }

  isShowedText(index: number): boolean {
    return this.showedIndex === index;
  }

  @HostListener('window:scroll')
  onScroll() {    
    this.checkIfExperienceElementIsInViewPort();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfExperienceElementIsInViewPort();
  }
}
