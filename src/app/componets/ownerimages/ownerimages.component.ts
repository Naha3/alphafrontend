import { Component, HostListener } from '@angular/core';
import { EstimateDetails } from './EstimateDetails/EstimateDetails.interface';

@Component({
  selector: 'app-ownerimages',
  templateUrl: './ownerimages.component.html',
  styleUrl: './ownerimages.component.scss',
})
export class OwnerimagesComponent {
  isSmallScreen: boolean = window.innerWidth > 720;  // Flag for screen size
  selectedImage: number = 0;  // Default selected image
  showMore: boolean = false;  // Flag to toggle extra details
  isSticky = false; // Flag for sticky mode
  isContentVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = offset > 350;
    this.isContentVisible = offset <= 350;
  }

  images = [  // Image array
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
    '/assets/images/bonnet-1732777028372.webp',
  ];
  
  estimateDetails: EstimateDetails = {  // Sample estimate data
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

  // Listen to window resize events and update the screen size flag
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  constructor() {
    this.checkScreenSize();  // Initialize screen size check on component load
  }

  private checkScreenSize() {
    this.isSmallScreen =  window.innerWidth <= 720;;  // Update the flag based on screen size
  }

  // Toggle the visibility of extra customer/vehicle details
  toggleView() {
    this.showMore = !this.showMore;
  }

  // Handle download functionality (can be customized)
  handleDownload() {
    console.log('Downloading estimate...');
  }

  // Select image from thumbnails
  selectImage(index: number) {
    this.selectedImage = index;
  }
}