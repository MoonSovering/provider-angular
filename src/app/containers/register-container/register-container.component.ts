import { Component, Input } from '@angular/core';
import { RegisterFormComponent } from '../../ui/forms/register-form/register-form.component';
import { RegisterContainerFacade } from './register-container.facade';
import { IUser } from '../../core/models/user.model';

@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './register-container.component.html',
})
export class RegisterContainerComponent {
  @Input() userData: IUser;
  constructor(
    private readonly facade: RegisterContainerFacade
  ){}
  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getFormData(formData){
    this.facade.getUser(formData);
  }

}
