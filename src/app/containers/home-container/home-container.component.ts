import { Component } from '@angular/core';
import { HomeComponent } from '../../ui/blocks/home/home.component';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {

}
