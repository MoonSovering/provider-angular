import { Component, Input } from '@angular/core';
import { LinkedButtonComponent } from '../../elements/linked-button/linked-button.component';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LinkedButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  @Input() items: LinkedButton[];

}
