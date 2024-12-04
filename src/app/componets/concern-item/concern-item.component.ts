import { Component, Input } from '@angular/core';
import { Concern } from '../concerns-list/concern/concern.interface';

@Component({
  selector: 'app-concern-item',
  templateUrl: './concern-item.component.html',
  styleUrl: './concern-item.component.scss'
})
export class ConcernItemComponent {
  @Input() concern!: Concern;
}
