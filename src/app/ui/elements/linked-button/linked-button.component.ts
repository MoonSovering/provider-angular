import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-linked-button',
  standalone: true,
  imports: [RouterLink],
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
