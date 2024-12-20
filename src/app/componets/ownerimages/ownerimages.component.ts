import { Component, HostListener } from '@angular/core';
import { EstimateDetails } from './EstimateDetails/EstimateDetails.interface';

@Component({
  selector: 'app-ownerimages',
  templateUrl: './ownerimages.component.html',
  styleUrl: './ownerimages.component.scss',
})
export class OwnerimagesComponent {
  isSmallScreen: boolean = window.innerWidth > 720;  
  selectedImage: number = 0;  
  showMore: boolean = false; 
  isSticky = false; 
  isContentVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = offset > 400;
    this.isContentVisible = offset <= 400;
    if( this.isSmallScreen){
      debugger
      this.isSticky=true
    }
    // 
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
    this.isSmallScreen =  window.innerWidth <= 720;
    
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