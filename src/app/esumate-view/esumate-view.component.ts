import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-esumate-view',
  templateUrl: './esumate-view.component.html',
  styleUrl: './esumate-view.component.scss'
})
export class EsumateViewComponent  {

  @ViewChild('parentContainer') parentContainer!: ElementRef;
  showInitialSections = true;

  // Proceed to next set of components
  proceedToNext() {
    this.showInitialSections = false;

    // Scroll to the top of the next section
    setTimeout(() => {
      this.scrollToTop();
    });
  }

  // Back to initial set of components
  backToInitialSections() {
    this.showInitialSections = true;

    // Scroll to the top of the initial section
    setTimeout(() => {
      this.scrollToTop();
    });
  }

  // Scroll to the top of the container
  scrollToTop() {
    if (this.parentContainer) {
      this.parentContainer.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}