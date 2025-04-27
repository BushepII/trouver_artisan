import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-artisan',
  imports: [CommonModule, RouterLink],
  templateUrl: './card-artisan.component.html',
  styleUrl: './card-artisan.component.scss'
})
export class CardArtisanComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() specialty!: string;
  @Input() note!: number;
  @Input() location!: string;
  @Input() about!: string;
  @Input() email!: string;
  @Input() website!: string;
  @Input() category!: string;
  @Input() top!: boolean;

  getStarType(index: number): 'full' | 'half' | 'empty' {
    const fullStars = Math.floor(this.note);
    const decimal = this.note - fullStars;

    if (index < fullStars) {
      return 'full';
    }
    if (index === fullStars && decimal > 0.25) {
      return 'half';
    }
    return 'empty';
  }
}
