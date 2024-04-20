import { Component, Input } from '@angular/core';
import { LinkedLogo } from '../../../core/models/interfaces/linked-logo.interface';

@Component({
  selector: 'app-linked-logo',
  standalone: true,
  imports: [],
  templateUrl: './linked-logo.component.html',
  styleUrl: './linked-logo.component.css'
})
export class LinkedLogoComponent {

  @Input() linkedLogo: LinkedLogo;

}
