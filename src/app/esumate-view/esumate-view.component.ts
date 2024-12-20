import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-esumate-view',
  templateUrl: './esumate-view.component.html',
  styleUrls: ['./esumate-view.component.scss']
})
export class EsumateViewComponent {
  showInitialSections = true;
  isSmallScreen : boolean = window.innerWidth <= 720;
  isSticky = false;
  isOwnerImagesSticky = false; 

  onStickinessChange(isSticky: boolean) {
    this.isOwnerImagesSticky = isSticky;
    console.log('OwnerImages sticky state:', isSticky);
  }
  @ViewChild('ownerImages', { static: false }) ownerImages!: ElementRef;

  ngAfterViewInit() {
    const scrollContainer = document.querySelector('.scrollable');
    scrollContainer?.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event: any): void {
    const scrollContainer = event.target as HTMLElement;
    const bounding = this.ownerImages.nativeElement.getBoundingClientRect();
    this.isSticky = bounding.top <= 0;

    console.log('Scroll position:', scrollContainer.scrollTop, 'Is Sticky:', this.isSticky);
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
