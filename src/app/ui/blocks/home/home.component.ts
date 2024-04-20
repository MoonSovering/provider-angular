import { Component, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
