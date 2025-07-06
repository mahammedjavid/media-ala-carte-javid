import { Component, signal, OnInit } from '@angular/core';
import { SERVICES_LIST } from '../../core/constants/app.constants';
@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services = SERVICES_LIST;
  expandedIndex = signal<number>(0);
  isMobile = signal<boolean>(false);
  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }
  checkMobile() {
    this.isMobile.set(window.innerWidth <= 768);
    if (this.isMobile()) {
      this.expandedIndex.set(-1);
    }
  }
  setExpanded(index: number) {
    if (this.isMobile()) {
      return;
    }
    this.expandedIndex.set(index);
  }
  isCardExpanded(index: number): boolean {
    if (this.isMobile()) {
      return true;
    }
    return this.expandedIndex() === index;
  }
} 