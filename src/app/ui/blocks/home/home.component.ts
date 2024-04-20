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
  @Input() navigationElements: LinkedButton[];
}
