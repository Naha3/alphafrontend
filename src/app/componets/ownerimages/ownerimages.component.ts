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
    // Debugging log to ensure scroll is triggered
    console.log('Scroll event triggered');
    const offset = window.pageYOffset || document.documentElement.scrollTop;

    if (this.isSmallScreen) {
      // debugger
      // Small screen scroll behavior
      this.isSticky = offset > 100; // Adjust threshold as needed
      this.isContentVisible = offset <= 100;
      console.log('Small Screen Scroll Offset:', offset);
      console.log('Is Sticky:', this.isSticky);
    } else {
      // debugger
      // Large screen scroll behavior
      this.isSticky = offset > 450;
      this.isContentVisible = offset <= 450;
      console.log('Large Screen Scroll Offset:', offset);
      console.log('Is Sticky:', this.isSticky);
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    // Update screen size on resize
    this.checkScreenSize();
    console.log('Screen resized. Is Small Screen:', this.isSmallScreen);
  }

  constructor() {
    this.checkScreenSize(); // Initialize screen size detection
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 720;
    console.log('Is Small Screen (checkScreenSize):', this.isSmallScreen);
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
