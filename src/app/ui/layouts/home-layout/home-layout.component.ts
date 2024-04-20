import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderContainerComponent, FooterContainerComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
