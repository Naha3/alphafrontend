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
      description: 'Engine oil level is low and requires topping up.',
      service: 'Engine Oil Labor',
      laborCost: 60,
      discount: 15,
      partCost: 10,
      partQuantity: 5.5,
      total: 36.5,
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
    },
  ];
}
