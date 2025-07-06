import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ServicesComponent } from '../../shared/components/services/services.component';
import { SolutionComponent } from '../../shared/components/solution/solution.component';
import { CollaborationComponent } from '../../shared/components/collaboration/collaboration.component';
import { SuperchargeComponent } from '../../shared/components/supercharge/supercharge.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, ServicesComponent, SolutionComponent, CollaborationComponent, SuperchargeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
