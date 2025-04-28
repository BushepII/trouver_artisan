import { Component, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']).then(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}