import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderContainerComponent, FooterContainerComponent],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.css'
})
export class ProductLayoutComponent {}
