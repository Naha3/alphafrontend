import { Component } from '@angular/core';
import { Concern } from './concern/concern.interface';

@Component({
  selector: 'app-concerns-list',
  templateUrl: './concerns-list.component.html',
  styleUrl: './concerns-list.component.scss'
})
export class ConcernsListComponent {
  concerns: Concern[] = [
    {
      id: 1,
      title: 'Concern 1:   ',
      title_description:'   Client has requested an oil change.',
      level:'level',
      concern:'Needs Immediate Attention',
      image: '/assets/images/bonnet-1732777028372.webp',
      title_name: 'Engine oil',
      title_namee: 'ENGINE OIL',
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
    {
      id: 2,
      title: 'Concern 2: ',
      title_description:'Client has requested an oil change.',
      description: 'Engine oil level is low and requires topping up.',
      service: 'Engine Oil Labor',
      laborCost: 60,
      discount: 15,
      partCost: 10,
      partQuantity: 5.5,
      total: 36.5,
      hours:'0.5',
      hour_cost:'150.00',
      services_cost:'60.00',
      discount_amount:'15.00',
      services_message:'Includes: The removal of component and all necessary components for access.Does not include: System diagnosis, testing, wheel alignment, or a vehicle road test. The disassembly of shock/strut and spring assembly.',
total_cost:'159.00',
    },
  ];
}
