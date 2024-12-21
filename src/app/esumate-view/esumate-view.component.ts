import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-esumate-view',
  templateUrl: './esumate-view.component.html',
  styleUrls: ['./esumate-view.component.scss']
})
export class EsumateViewComponent {
  showInitialSections = true;
  isSmallScreen: boolean = window.innerWidth <= 720;
  isSticky = false;
  isOwnerImagesSticky = false;

  @ViewChild('scrollableContainer') scrollableContainer: ElementRef | undefined;

  @ViewChild('ownerImages', { static: false }) ownerImages!: ElementRef;

  private scrollListener!: () => void;

  constructor(private renderer: Renderer2) {}

  ngAfterViewChecked() {
    const scrollContainer = document.querySelector('.scrollable');
    if (scrollContainer  && this.ownerImages) {
      this.scrollListener = this.renderer.listen(scrollContainer, 'scroll', (event) => this.onScroll(event));
    }
  }

  onScroll(event: Event): void {
    if (this.ownerImages?.nativeElement) {
      const bounding = this.ownerImages.nativeElement.getBoundingClientRect();
      this.isSticky = bounding.top <= 0;
          }
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  onStickinessChange(isSticky: boolean) {
    this.isSticky = isSticky;
    // console.log('OwnerImages sticky state:', isSticky);
  }

  
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; 
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
    if (this.scrollableContainer) {
      const container = this.scrollableContainer.nativeElement;

      if (typeof container.scrollTo === 'function') {
        // Modern browsers: Use smooth scrolling
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Fallback for older browsers
        container.scrollTop = 0;
      }
    } else {
      console.error('Scrollable container not found.');
    }
  }
 
}
