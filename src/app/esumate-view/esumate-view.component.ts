import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-esumate-view',
  templateUrl: './esumate-view.component.html',
  styleUrls: ['./esumate-view.component.scss']
})
export class EsumateViewComponent {
  showInitialSections = true;
  isSmallScreen = false;

  constructor() {
    this.checkScreenSize();
  }

  // Check the screen size
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Adjust breakpoint as needed
  }

  proceedToNext() {
    if (this.isSmallScreen) {
      this.showInitialSections = false;
      setTimeout(() => {
        this.scrollToTop();
      }, 0);
    }
  }

  backToInitialSections() {
    if (this.isSmallScreen) {
      this.showInitialSections = true;
      setTimeout(() => {
        this.scrollToTop();
      }, 0);
    }
  }

  scrollToTop() {
    const parentContainer = document.querySelector('.scrollable');
    if (parentContainer) {
      parentContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
