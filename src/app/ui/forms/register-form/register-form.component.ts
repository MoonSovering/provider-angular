import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../elements/title/title.component';
import { InputComponent } from '../../elements/input/input.component';
import { LabelComponent } from '../../elements/label/label.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { IRegisterUser } from '../../../core/models/interfaces/register-user.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [TitleComponent, InputComponent, LabelComponent, ButtonComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  @Output() registerValue = new EventEmitter<IRegisterUser>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder ){}

  ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          email:    ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.email]],
          password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]
          ]
        },
      )
  }

  onSubmit($event: SubmitEvent): void {
    this.submitted = true;
    $event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    this.registerValue.emit(this.form.value);
  }
}
