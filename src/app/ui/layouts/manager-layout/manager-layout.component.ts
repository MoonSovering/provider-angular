import { Component } from '@angular/core';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager-layout',
  standalone: true,
  imports: [HeaderContainerComponent, FooterContainerComponent, RouterOutlet],
  templateUrl: './manager-layout.component.html',
  styleUrl: './manager-layout.component.css'
})
export class ManagerLayoutComponent {

}
