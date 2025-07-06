import { Component } from '@angular/core';
import { FOOTER_LINKS, FOOTER_CONTACT, FooterLink } from '../../core/constants/app.constants';
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links = FOOTER_LINKS;
  contact = FOOTER_CONTACT;
  leftLinks: FooterLink[] = this.links.filter(l => l.group === 'left');
  rightLinks: FooterLink[] = this.links.filter(l => l.group === 'right');
  nl2br(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
