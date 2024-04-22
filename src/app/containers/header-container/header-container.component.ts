import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../ui/blocks/header/header.component';
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';
import { HeaderContainerFacade } from './header-container.facade';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-container.component.html',
})
export class HeaderContainerComponent {
  constructor(private readonly headerContainerFacade: HeaderContainerFacade ) {}
  linkedButton: LinkedButton[] = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'logout',
      link: '/auth/sign-in'
    }
  ];

  handleLinkedButtonValue(data: string): void {
    this.headerContainerFacade.handleLinkedButtonValue(data);
  }
}
