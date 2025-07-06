import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';
import { SOLUTION_CARDS } from '../../core/constants/app.constants';
@Component({
  selector: 'app-solution',
  standalone: true,
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent implements AfterViewInit {
  private animation = inject(AnimationService);
  @ViewChild('solutionHeader') solutionHeaderEl!: ElementRef;
  @ViewChildren('solutionCard') solutionCardEls!: QueryList<ElementRef>;
  cards = SOLUTION_CARDS;
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.animation.animateSolutionSection(
        this.solutionHeaderEl.nativeElement,
        this.solutionCardEls.map(ref => ref.nativeElement)
      );
    }
  }
} 