import { Component, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => InputComponent ),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type: string = '';
  @Input() placeholder: string= '';

  value: any;
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  @HostListener('input', ['$event.target.value'])
  onInput(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }
}
