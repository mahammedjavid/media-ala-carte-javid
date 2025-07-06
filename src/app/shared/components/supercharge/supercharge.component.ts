import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';
@Component({
  selector: 'app-supercharge',
  standalone: true,
  templateUrl: './supercharge.component.html',
  styleUrl: './supercharge.component.scss'
})
export class SuperchargeComponent implements AfterViewInit {
  private animation = inject(AnimationService);
  @ViewChild('superchargeCard') superchargeCardEl!: ElementRef;
  @ViewChild('superchargeTitle') superchargeTitleEl!: ElementRef;
  @ViewChildren('superchargeListItem') superchargeListItems!: QueryList<ElementRef>;
  @ViewChild('superchargeCta') superchargeCtaEl!: ElementRef;
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.animation.animateSuperchargeSection(
        this.superchargeCardEl.nativeElement,
        this.superchargeTitleEl.nativeElement,
        this.superchargeListItems.map(ref => ref.nativeElement),
        this.superchargeCtaEl.nativeElement
      );
    }
  }
} 