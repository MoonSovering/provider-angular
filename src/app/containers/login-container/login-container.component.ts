import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { IUserLogin } from '../../core/models/user-login.model';
import { LoginContainerFacade } from './login-container.facade';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent implements OnInit, OnDestroy{

  @Input() userData: IUserLogin;
  constructor(
    private readonly facade: LoginContainerFacade
  ){}
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getFormData(formData){
    this.facade.getUser(formData);
  }
}
