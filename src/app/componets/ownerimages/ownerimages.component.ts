import { Component } from '@angular/core';
import { EstimateDetails } from './EstimateDetails/EstimateDetails.interface';

@Component({
  selector: 'app-ownerimages',
  templateUrl: './ownerimages.component.html',
  styleUrl: './ownerimages.component.scss'
})
export class OwnerimagesComponent {
  selectedImage: number = 0;

  images = [
    '/assets/images/bonnet-1732777028372.webp?height=400&width=300',
    '/assets/images/bonnet-1732777028372.webp?height=100&width=150',
    '/assets/images/bonnet-1732777028372.webp?height=100&width=150',
    '/assets/images/bonnet-1732777028372.webp?height=100&width=150',
    '/assets/images/bonnet-1732777028372.webp?height=100&width=150'
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

  handleDownload() {
    // Implement download functionality
    console.log('Downloading estimate...');
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
