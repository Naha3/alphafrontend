import { Component, HostListener } from '@angular/core';
import { Concern } from './concern/concern.interface';

@Component({
  selector: 'app-concerns-list',
  templateUrl: './concerns-list.component.html',
  styleUrl: './concerns-list.component.scss'
})
export class ConcernsListComponent {
  showCost: boolean = true;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.showCost = window.innerWidth > 720;
  }
  concerns: Concern[] = [
    {
      id: 1,
      title: 'Concern 1:   ',
      title_description:'   Client has requested an oil change.',
      level:'level',
      concern:'Needs Immediate Attention',
      image: '/assets/images/bonnet-1732777028372.webp',
      title_name: 'Engine oil',
      description: 'Engine oil level is low and requires topping up.',
      service: 'Engine Oil Labor',
      laborCost: 60,
      discount: 15,
      partCost: 10,
      partQuantity: 5.5,
      total: 36.5,
      service_note:'This is a service note.',
      service_part:'OIL filter R&R',
      hours:'0.5',
      hour_cost:'150.00',
      services_cost:'60.00',
      discount_amount:'15.00',
      services_message:'Includes: The removal of component and all necessary components for access. Does not include: System diagnosis, testing, wheel alignment, or a vehicle road test. The disassembly of shock/strut and spring assembly.',
      total_cost:'159.00',
    },
//     {
//       id: 2,
//       title: 'Concern 2: ',
//       title_description:'Client has requested an oil change.',
//       description: 'Engine oil level is low and requires topping up.',
//       service: 'Engine Oil Labor',
//       laborCost: 60,
//       discount: 15,
//       partCost: 10,
//       partQuantity: 5.5,
//       total: 36.5,
//       hours:'0.5',
//       hour_cost:'150.00',
//       services_cost:'60.00',
//       discount_amount:'15.00',
//       services_message:'Includes: The removal of component and all necessary components for access.Does not include: System diagnosis, testing, wheel alignment, or a vehicle road test. The disassembly of shock/strut and spring assembly.',
// total_cost:'159.00',
//     },
  ];

  toggleDescription(index: number): void {
    const descriptionContent = document.querySelector(`#description-content-${index}`) as HTMLElement;
    const toggleButton = document.querySelector(`#toggle-description-btn-${index}`) as HTMLElement;
    const closeButton = document.querySelector(`#close-description-${index}`) as HTMLElement;
  
    if (descriptionContent.style.display === "none" || descriptionContent.style.display === "") {
      // Show description
      descriptionContent.style.display = "block";
  
      // Hide the "Show Description" button
      toggleButton.style.display = "none";
  
      // Show the "Hide Description" button
      closeButton.style.display = "block";
    } else {
      // Hide description
      descriptionContent.style.display = "none";
  
      // Show the "Show Description" button
      toggleButton.style.display = "block";
  
      // Hide the "Hide Description" button
      closeButton.style.display = "none";
    }
  }
  
  
  
}
