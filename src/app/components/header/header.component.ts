import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sectionToggled = new EventEmitter<{section: 'menu' | 'search', open: boolean}>();

  isMenuOpen: boolean = false;
  isSearchOpen: boolean = false;

  searchQuery: string = '';

  constructor(private router: Router) {}

  handleSection(section: 'menu' |'search'){
    if (section === 'menu'){
      this.isMenuOpen = !this.isMenuOpen;
      this.isSearchOpen = false;
      this.sectionToggled.emit({ section: 'menu', open: this.isMenuOpen });
    } else if (section === 'search'){
      this.isSearchOpen = !this.isSearchOpen;
      this.isMenuOpen = false;
      this.sectionToggled.emit({ section: 'search', open: this.isSearchOpen });
    }
  }

  onSearch() {
    const trimmedQuerry = this.searchQuery.trim();
    if (trimmedQuerry) {
      this.router.navigate(['/search'], {queryParams: { query: trimmedQuerry } });
      this.searchQuery = '';
    }
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/search'], { queryParams: { query: category } });
  }
}