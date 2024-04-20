import { Component, Input } from '@angular/core';
import { LinkedLogoComponent } from '../../elements/linked-logo/linked-logo.component';
import { LinkedLogo } from '../../../core/models/interfaces/linked-logo.interface';
import { ParagraphComponent } from '../../elements/paragraph/paragraph.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinkedLogoComponent, ParagraphComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input() linkedLogo: LinkedLogo[];

}
