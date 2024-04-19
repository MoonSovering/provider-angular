import { Component } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { LogoComponent } from '../../elements/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
