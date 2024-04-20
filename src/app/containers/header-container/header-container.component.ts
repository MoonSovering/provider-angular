import { Component } from '@angular/core';
import { HeaderComponent } from '../../ui/blocks/header/header.component';
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-container.component.html',
})
export class HeaderContainerComponent {
  linkedButton: LinkedButton[] = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'logout',
      link: '/auth/sign-in'
    }
  ];
}
