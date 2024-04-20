import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-linked-button',
  standalone: true,
  imports: [],
  templateUrl: './linked-button.component.html',
  styleUrl: './linked-button.component.css'
})
export class LinkedButtonComponent {
  @Input() item: LinkedButton;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
