import { Component } from '@angular/core';
import { Summery } from './summery_list/summery.interfac';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrl: './summery.component.scss'
})
export class SummeryComponent {

summeries:Summery[]=[
  {
    serviceName:'Service Amount',
    Amount:342.00,
    serviceDetails: [
      {
        parts_1st: 'Parts',
        cost: 32.00
      },
      {
        parts_1st: 'Labor',
        cost: 32.00
      },
      {
        parts_1st: 'Tire',
        cost: 32.00
      },
      {
        parts_1st: 'Other',
        cost: 32.00
      }
    ],
  }, {
    serviceName:'Discount',
    Amount:342.00,
    serviceDetails: [
      {
        parts_1st: 'VIP Discount',
        cost: 32.00
      },
     
    ],
  }, 
  {
    serviceName:'Fee',
    Amount:342.00,
    serviceDetails: [
      {
        parts_1st: 'Testautomationfees',
        cost: 32.00
      },
      {
        parts_1st: 'Shop Supplies',
        cost: 32.00
      },
      {
        parts_1st: 'Junaid Part Fee',
        cost: 32.00
      }
    ],
  },
  {
    serviceName:'Subtotal',
    Amount:342.00,
   
  },
  {
    serviceName:'Passthrough Taxes',
    Amount:342.00,
  },
  {
    serviceName:'Sales Taxes',
    Amount:342.00,
    serviceDetails: [
      {
        parts_1st: 'GST/HST ZR (5.56%)',
        cost: 32.00
      },
      {
        parts_1st: 'HST ON (10%)',
        cost: 32.00
      },
     
    ],
  },
  {
    serviceName:'Grand Total',
    Amount:531.66,
   
  },
  {
    serviceName:'Paid to Date',
    Amount:0.00,
   
  },
  {
    serviceName:'Remaining Balance',
    Amount:531.66,
   
  }
  ,
  {
    serviceName:'Deferred Total',
    Amount:0.00,
   
  }
]
}
