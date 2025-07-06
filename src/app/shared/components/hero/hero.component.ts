import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  private animation = inject(AnimationService);
  @ViewChildren('heroText') heroTextEls!: QueryList<ElementRef>;
  @ViewChild('heroImage', { static: false }) heroImageEl!: ElementRef;
  @ViewChildren('heroBtn') heroBtnEls!: QueryList<ElementRef>;
  @ViewChildren('heroBanner') heroBannerEls!: QueryList<ElementRef>;
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.animation.animateHeroSection(
        this.heroTextEls.map(ref => ref.nativeElement),
        this.heroImageEl?.nativeElement,
        this.heroBtnEls.map(ref => ref.nativeElement),
        this.heroBannerEls.map(ref => ref.nativeElement),
      );
      this.heroBannerEls.forEach(ref => this.animation.animateBannerOnScroll(ref.nativeElement));
    }
  }
} 