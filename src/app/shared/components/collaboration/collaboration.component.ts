import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';
import { COLLAB_STATS, COLLAB_EXPERTS } from '../../core/constants/app.constants';
@Component({
  selector: 'app-collaboration',
  standalone: true,
  templateUrl: './collaboration.component.html',
  styleUrl: './collaboration.component.scss'
})
export class CollaborationComponent implements AfterViewInit {
  private animation = inject(AnimationService);
  @ViewChild('collabHeader') collabHeaderEl!: ElementRef;
  @ViewChild('collabStatsBar') collabStatsBarEl!: ElementRef;
  @ViewChildren('collabStat') collabStatEls!: QueryList<ElementRef>;
  @ViewChildren('collabAvatar') collabAvatarEls!: QueryList<ElementRef>;
  stats = COLLAB_STATS;
  experts = COLLAB_EXPERTS;
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.animation.animateCollaborationSection(
        this.collabHeaderEl.nativeElement,
        this.collabStatsBarEl.nativeElement,
        this.collabStatEls.map(ref => ref.nativeElement),
        this.collabAvatarEls.map(ref => ref.nativeElement)
      );
    }
  }
} 