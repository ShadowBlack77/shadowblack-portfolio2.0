import { Component, EventEmitter, HostListener, Output, Input, ViewChild, ElementRef } from "@angular/core";
import { NgClass } from "@angular/common";
import { trigger, state, style, animate, transition } from "@angular/animations";

import { HamburgerMenuComponent } from "../hamburger-menu/hamburger-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HamburgerMenuComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('scrollAnimation', [
      state('start', style({
        backgroundColor: 'transparent',
        padding: '24px 0'
      })),
      state('end', style({
        backgroundColor: 'black',
        padding: '8px 0'
      })),
      transition('start => end', [
        animate('.5s ease-in-out')
      ]),
      transition('end => start', [
        animate('.5s ease-in-out')
      ])
    ]),
  ]
})
export class HeaderComponent {
  @ViewChild('hamburgerMenu', { read: ElementRef }) hamburgerMenu!: ElementRef;
  
  @Output() animationStateChanged = new EventEmitter<string>();
  @Input() currentSection: string = '';

  animationState = 'start';

  isHamburgerMenuOpen: boolean = false;
  isTextMenuShowed: boolean = false;
  isButtonClicked: boolean = false;
  isScrolled: boolean = true;

  @HostListener('window:scroll')
  onScroll() {
    if(this.isHamburgerMenuOpen && this.isScrolled) {
      this.isScrolled = false;
      setTimeout(() => {
        this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
        this.isScrolled = true;
      }, 1000);
      this.isTextMenuShowed = !this.isTextMenuShowed;
    }

    if (window.scrollY > 1) {
      this.setAnimationState('end');
    } else {
      this.setAnimationState('start');
    }
  }

  private setAnimationState(state: string) {
    if (this.animationState !== state) {
      this.animationState = state;
      this.animationStateChanged.emit(state);
    }
  }

  onHamBtnClick() {
    if (!this.isButtonClicked) { 
      this.isButtonClicked = !this.isButtonClicked;

      if (this.isHamburgerMenuOpen) {
        setTimeout(() => {
          this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
        }, 1000)
      } else {
        this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
      }
  
      if (!this.isTextMenuShowed) {
        setTimeout(() => {
          this.isTextMenuShowed = !this.isTextMenuShowed;
        }, 1000);
      } else {
        this.isTextMenuShowed = !this.isTextMenuShowed;
      }
    }

    setTimeout(() => {
      this.isButtonClicked = !this.isButtonClicked;
    }, 1000)
  }
}
