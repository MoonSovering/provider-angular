import { Component, Input } from '@angular/core';
import { LogoComponent } from '../../elements/logo/logo.component';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, LinkedButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public linkedButton: LinkedButton[] = [
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
