import { Component } from '@angular/core';
import { Concern } from './estimate-gallery/estimate-gallery.interface';

@Component({
  selector: 'app-estimate-gallery',
  templateUrl: './estimate-gallery.component.html',
  styleUrl: './estimate-gallery.component.scss'
})
export class EstimateGalleryComponent {
  currentConcern: Concern = {
    id: 1,
    title: 'Concern 1',
    description: 'Client has requested an oil change.',
    images: [
      { id: 1, src: '/placeholder.svg?height=600&width=800', alt: 'Oil dipstick image 1' },
      { id: 2, src: '/placeholder.svg?height=600&width=800', alt: 'Oil dipstick image 2' },
      { id: 3, src: '/placeholder.svg?height=600&width=800', alt: 'Oil dipstick image 3' },
    ],
  };

  currentImageIndex: number = 0;
  isOpen: boolean = true;

  nextImage(): void {
    if (this.currentImageIndex < this.currentConcern.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  closeGallery(): void {
    this.isOpen = false;
  }
}