import { Component, signal } from '@angular/core';
import { NAV_ITEMS, NavItem } from './nav.config';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = signal<NavItem[]>(NAV_ITEMS);
  activeIndex = signal<number>(0);
  isMobileMenuOpen = signal<boolean>(false);
  isActive(index: number): boolean {
    return this.activeIndex() === index;
  }
  setActive(index: number = 0) {
    this.activeIndex.set(index);
    this.isMobileMenuOpen.set(false);
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen.update(open => !open);
  }
}
