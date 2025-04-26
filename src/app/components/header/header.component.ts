import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isSearchOpen: boolean = false;

  searchQuery: string = '';

  handleSection(section: 'menu' |'search'){
    if (section === 'menu'){
      this.isMenuOpen = !this.isMenuOpen;
      this.isSearchOpen = false;
    } else if (section === 'search'){
      this.isSearchOpen = !this.isSearchOpen;
      this.isMenuOpen = false;
    }
  }
}
