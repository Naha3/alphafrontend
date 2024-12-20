import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';
import { EstimateDetails } from './EstimateDetails/EstimateDetails.interface';

@Component({
  selector: 'app-ownerimages',
  templateUrl: './ownerimages.component.html',
  styleUrls: ['./ownerimages.component.scss'],
})
export class OwnerimagesComponent {
  isSmallScreen: boolean = window.innerWidth <= 720;
  isSticky = false;
  isContentVisible = true; // Control visibility of content
  selectedImage: number = 0;
  showMore: boolean = false;

  @Output() stickinessChange = new EventEmitter<boolean>(); // Emit stickiness changes to parent

  private scrollListener!: () => void;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      this.onScroll(); // Call the onScroll method
    });

    this.renderer.listen('window', 'resize', () => {
      this.checkScreenSize();
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;

    const shouldBeSticky = offset > 200; // Adjust threshold for stickiness
    if (this.isSticky !== shouldBeSticky) {
      this.isSticky = shouldBeSticky;
      this.isContentVisible = !shouldBeSticky; // Update visibility based on stickiness
      this.stickinessChange.emit(this.isSticky); // Notify parent of state change
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
    console.log('Screen resized. Is Small Screen:', window.innerWidth);
    console.log('Screen resized. Screen Height:', window.innerHeight);
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
