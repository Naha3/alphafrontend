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
      console.log('Scroll position:', (event.target as HTMLElement).scrollTop, 'Is Sticky:', this.isSticky);
    }
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  onStickinessChange(isSticky: boolean) {
    this.isSticky = isSticky;
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
