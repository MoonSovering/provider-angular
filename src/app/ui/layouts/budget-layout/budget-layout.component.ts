import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';

@Component({
  selector: 'app-budget-layout',
  standalone: true,
  imports: [HeaderContainerComponent, FooterContainerComponent, RouterOutlet],
  templateUrl: './budget-layout.component.html',
  styleUrl: './budget-layout.component.css'
})
export class BudgetLayoutComponent {

}
