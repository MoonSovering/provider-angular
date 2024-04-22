import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IBuyProduct } from '../../../core/models/buy-product.model';
import { TitleComponent } from '../../elements/title/title.component';
import { InputComponent } from '../../elements/input/input.component';
import { LabelComponent } from '../../elements/label/label.component';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [ReactiveFormsModule ,TitleComponent, InputComponent, LabelComponent, ButtonComponent],
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css'
})
export class BuyProductComponent {
  @Output() buyProduct = new EventEmitter<IBuyProduct>();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    libraryType: new FormControl('')
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder ){}

  ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          price: [0,[Validators.required,Validators.min(1)]],
          stock: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
          libraryType: ['', [Validators.required]]
        },
      )
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.buyProduct.emit(this.form.value);
  }

}
