import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-artisan',
  imports: [CommonModule],
  templateUrl: './card-artisan.component.html',
  styleUrl: './card-artisan.component.scss',
  encapsulation: ViewEncapsulation.None,
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


  getFillPercentage(index: number): number {
    const full = Math.floor(this.note);
    if (index < full) return 100;
    if (index > full) return 0;
    return Math.round((this.note - full) * 100);
  }
}
