import { Component } from '@angular/core';
import { FooterComponent } from '../../ui/blocks/footer/footer.component';
import { LinkedLogo } from '../../core/models/interfaces/linked-logo.interface';

@Component({
  selector: 'app-footer-container',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './footer-container.component.html',
})
export class FooterContainerComponent {
  linkedLogo: LinkedLogo[] = [
    {
      path:'./assets/icons/linkedin-icon.svg',
      link:'https://www.linkedin.com/in/armando-jose-sanmartin-cerro-57716b225/',
      alt:'linkedin svg icon'
    },
    {
      path:'./assets/icons/github-icon.svg',
      link:'https://github.com/MoonSovering',
      alt:'github svg icon'
    },
    {
      path:'./assets/icons/twitter-icon.svg',
      link:'https://twitter.com',
      alt:'twitter svg icon'
    }
  ];
}
