import { Component } from '@angular/core';
import { HistoryItem } from './submission.interface';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})

export class SubmissionComponent {
historyDatas: HistoryItem[] = [
    {
      date: "Oct 29, 2024 4:00 am",
      description: "N/A",
      approved: 1,
      deferred: 2,
      channel: "Online Portal",
      amount: "$50.00"
    },
     {
       date: "Oct 29, 2024 4:00 am",
       description: "N/A",
       approved: 3,
       deferred: 0,
       channel: "Online Portal",
       amount: "$50.00"
     },
     {
       date: "Oct 29, 2024 4:00 am",
       description: "N/A",
       approved: 2,
      deferred: 1,
       channel: "Online Portal",
       amount: "$50.00"
     }
  ];

  

  
  
}