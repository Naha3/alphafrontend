import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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

  private scrollListener!: () => void;

  constructor(private renderer: Renderer2, private elRef: ElementRef, ) {
    this.checkScreenSize(); 
  }
  // @HostListener('window:scroll', [])
  // ngAfterViewInit() {
  //   // Add scroll event listener
  //   this.scrollListener = this.renderer.listen('window', 'scroll', this.onWindowScroll.bind(this));

  //   // Handle resize for screen size detection
  //   this.renderer.listen('window', 'resize', () => this.checkScreenSize());
  // }
  ngOnInit() {
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      this.onWindowScroll();
    });

    this.renderer.listen('window', 'resize', () => {
      this.checkScreenSize();
    });
  }

  onWindowScroll() {
    console.log('Scroll event triggered');
    const offset = window.pageYOffset || document.documentElement.scrollTop;
console.log("naha")
    if (this.isSmallScreen) {
      this.isSticky = offset > 100;
      this.isContentVisible = offset <= 100;
      console.log('Small Screen Scroll Offset:', offset);
      console.log('Is Sticky:', this.isSticky);
    } else {
      this.isSticky = offset > 450;
      this.isContentVisible = offset <= 450;
      console.log('Large Screen Scroll Offset:', offset);
      console.log('Is Sticky:', this.isSticky);
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
    console.log('Screen resized. Is Small Screen:', window.innerWidth);
    console.log('Screen resized. Is height Screen:', window.innerHeight);
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
