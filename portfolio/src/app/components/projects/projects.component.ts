import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('projectTitleAnimation', [
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
    ]),
    trigger('projectOneAnimation', [
      state('start', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('1s .3s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s .3s ease-in-out')
      ])
    ]),
    trigger('projectTwoAnimation', [
      state('start', style({
        opacity: 0,
        pointerEvents: 'none'        
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .6s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s .6s ease-in-out')
      ])
    ]),
    trigger('projectThreeAnimation', [
      state('start', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .9s ease-in-out')
      ]),
      transition('end => start', [
        animate('1s .9s ease-in-out')
      ])
    ]),
    trigger('projectFourAnimation', [
      state('start', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
       state('end', style({
        opacity: 1
       })),
       transition('start => end', [
        animate('1s 1.2s ease-in-out')
       ]),
       transition('end => start', [
        animate('1s 1.2s ease-in-out')
       ])
    ]),
    trigger('projectFiveAnimation', [
      state('start', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
       state('end', style({
        opacity: 1
       })),
       transition('start => end', [
        animate('1s 1.5s ease-in-out')
       ]),
       transition('end => start', [
        animate('1s 1.5s ease-in-out')
       ])
    ]),
    trigger('projectSixAnimation', [
      state('start', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
       state('end', style({
        opacity: 1,
       })),
       transition('start => end', [
        animate('1s 1.8s ease-in-out')
       ]),
       transition('end => start', [
        animate('1s 1.8s ease-in-out')
       ])
    ]),
  ]
})
export class ProjectsComponent {
  @ViewChild('projectTitle') projectTitle!: ElementRef;
  @ViewChild('projectOne') projectOne!: ElementRef;
  @ViewChild('projectTwo') projectTwo!: ElementRef;
  @ViewChild('projectThree') projectThree!: ElementRef;
  @ViewChild('projectFour') projectFour!: ElementRef;
  @ViewChild('projectFive') projectFive!: ElementRef;
  @ViewChild('projectSix', { read: ElementRef }) projectSix!: ElementRef;

  projectTitleState = 'start';
  projectOneState = 'start';
  projectTwoState = 'start';
  projectThreeState = 'start';
  projectFourState = 'start';
  projectFiveState = 'start';
  projectSixState = 'start';

  checkIfProjectTitleIsInViewport() {
    const element = this.projectTitle.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    
    if (isInViewport) {
      this.projectTitleState = 'end';
    } else {
      // this.projectTitleState = 'start';
    }
  }

  checkIfProjectOneIsInViewport() {
    const element = this.projectOne.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.projectOneState = 'end';
    } else {
      // this.projectOneState = 'start';
    }
  }

  checkIfProjectTwoIsInViewport() {
    const element = this.projectTwo.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.projectTwoState = 'end';
    } else {
      // this.projectTwoState = 'start';
    }
  }

  checkIfProjectThreeIsInViewport() {
    const element = this.projectThree.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.projectThreeState = 'end';
    } else {
      // this.projectThreeState = 'start';
    }
  }

  checkIfProjectFourIsInViewport() {
    const element = this.projectFour.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.projectFourState = 'end';
    } else {
      // this.projectFourState = 'start';
    }
  }

  checkIfProjectFiveIsInViewport() {
    const element = this.projectFive.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.projectFiveState = 'end';
    } else {
      // this.projectFiveState = 'start';
    }
  }

  checkIfProjectSixIsInViewport() {
    const element = this.projectSix.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.projectSixState = 'end';
    } else {
      // this.projectSixState = 'start';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfProjectTitleIsInViewport();
    this.checkIfProjectOneIsInViewport();
    this.checkIfProjectTwoIsInViewport();
    this.checkIfProjectThreeIsInViewport();
    this.checkIfProjectFourIsInViewport();
    this.checkIfProjectFiveIsInViewport();
    this.checkIfProjectSixIsInViewport();
  }

  @HostListener('window:load')
  onLoad() {
    this.checkIfProjectTitleIsInViewport();
    this.checkIfProjectOneIsInViewport();
    this.checkIfProjectTwoIsInViewport();
    this.checkIfProjectThreeIsInViewport();
    this.checkIfProjectFourIsInViewport();
    this.checkIfProjectFiveIsInViewport();
    this.checkIfProjectSixIsInViewport();
  }
}
