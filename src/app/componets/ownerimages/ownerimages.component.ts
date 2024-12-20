import { Component, HostListener } from '@angular/core';
import { EstimateDetails } from './EstimateDetails/EstimateDetails.interface';

@Component({
  selector: 'app-ownerimages',
  templateUrl: './ownerimages.component.html',
  styleUrls: ['./ownerimages.component.scss'], // Corrected `styleUrl` to `styleUrls`
})
export class OwnerimagesComponent {
  isSmallScreen: boolean = window.innerWidth <= 720; // Small screen detection
  isSticky = false; // Sticky header flag
  isContentVisible = true; // Content visibility flag
  selectedImage: number = 0; // Selected image index
  showMore: boolean = false; // Toggle additional details

  images = [
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
  ];

  estimateDetails: EstimateDetails = {
    estimateNumber: '43312',
    customer: {
      name: 'John Dofender',
      cell: '613-223-3323',
      email: 'superduper@gmail.com',
      serviceAdvisor: 'Jane Doi',
    },
    vehicle: {
      model: '2022 Ford Bronco Sport',
      licensePlate: 'LBM 7589',
      vin: '182738920837',
      odometerIn: '12233.3 Miles',
    },
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;

    if (this.isSmallScreen) {
      // Sticky behavior for small screens
      this.isSticky = offset > 200; // Adjust threshold as needed
      this.isContentVisible = offset <= 200;
    } else {
      // Sticky behavior for large screens
      this.isSticky = offset > 450;
      this.isContentVisible = offset <= 450;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  constructor() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 720;
  }

  toggleView() {
    this.showMore = !this.showMore;
  }

  handleDownload() {
    console.log('Downloading estimate...');
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
