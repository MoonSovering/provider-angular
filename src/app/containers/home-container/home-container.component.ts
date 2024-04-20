import { Component } from '@angular/core';
import { HomeComponent } from '../../ui/blocks/home/home.component';
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {
  navigationElements: LinkedButton[]= [
    {
      label: 'Buy products',
      link: 'buy-product'
    },
    {
      label: 'List Manager',
      link: 'manager'
    },
    {
      label: 'Budget manager',
      link: 'budget'
    }
  ];
}
