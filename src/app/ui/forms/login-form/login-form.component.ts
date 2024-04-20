import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../elements/title/title.component';
import { InputComponent } from '../../elements/input/input.component';
import { LabelComponent } from '../../elements/label/label.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { ILoginUser } from '../../../core/models/interfaces/login-user.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [TitleComponent, InputComponent, LabelComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{

  @Output() loginValue = new EventEmitter<ILoginUser>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder ){}

  ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]
          ]
        },
      )
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.loginValue.emit(this.form.value);
  }
}
