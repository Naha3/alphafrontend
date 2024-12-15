import { Component, HostListener } from '@angular/core';
import { EstimateDetails } from './EstimateDetails/EstimateDetails.interface';

@Component({
  selector: 'app-ownerimages',
  templateUrl: './ownerimages.component.html',
  styleUrl: './ownerimages.component.scss',
})
export class OwnerimagesComponent {
  selectedImage: number = 0;
  isSmallScreen = false; // Flag to determine if screen size is <= 720px
  showMore = false;

  constructor() {
    this.checkScreenSize(); // Initialize screen size check
  }

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

  // Listen to window resize events
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 720;
  }

  toggleView() {
    this.showMore = !this.showMore;
  }

  handleDownload() {
    // Implement download functionality
    console.log('Downloading estimate...');
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
