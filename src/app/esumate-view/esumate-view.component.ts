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
  private scrollListener!: () => void;

@ViewChild('ownerImages', { static: false }) ownerImages!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const scrollContainer = document.querySelector('.scrollable');
    if (scrollContainer) {
      this.scrollListener = this.renderer.listen(scrollContainer, 'scroll', (event) => this.onScroll(event));
    }
  }

  onScroll(event: Event): void {
    if (this.ownerImages?.nativeElement) {
      const bounding = this.ownerImages.nativeElement.getBoundingClientRect();
      this.isSticky = bounding.top <= 0;

      console.log('Scroll position:', (event.target as HTMLElement).scrollTop, 'Is Sticky:', this.isSticky);
    } else {
      console.error('ownerImages is not defined or inaccessible.');
    }
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  onStickinessChange(isSticky: boolean) {
    this.isOwnerImagesSticky = isSticky;
    console.log('OwnerImages sticky state:', isSticky);
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
    const parentContainer = document.querySelector('.scrollable');
    if (parentContainer) {
      parentContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
 
}
