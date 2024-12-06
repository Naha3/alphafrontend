import { Component } from '@angular/core';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})

export class SubmissionComponent {
  enteredId: number = 1; 
  

  clickHere(){
    this.enteredId = 2;
  }
  

  
}

  

  
  
