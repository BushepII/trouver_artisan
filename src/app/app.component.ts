import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardArtisanComponent } from "./components/card-artisan/card-artisan.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, CardArtisanComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  menuOpen = false;
  searchOpen = false;

  onSectionToggled(event: {section: 'menu' | 'search', open: boolean}) {
    if (event.section === 'menu'){
      this.menuOpen = event.open;
    } else if (event.section === 'search'){
      this.searchOpen = event.open;
    }
  }
}
