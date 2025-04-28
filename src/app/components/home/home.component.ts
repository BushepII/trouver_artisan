import { Component, inject, ViewEncapsulation } from '@angular/core';
import { InstructionService, Instruction } from '../../services/instructions.service';
import { CommonModule } from '@angular/common';
import { CardArtisanComponent } from '../card-artisan/card-artisan.component';
import { ArtisanService, Artisan } from '../../services/artisans.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardArtisanComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  private instructionService = inject(InstructionService);
  private artisanService = inject(ArtisanService);

  instructions: Instruction[] = [];
  artisans: Artisan[] = [];
  topArtisans: Artisan[] = [];

  ngOnInit(): void {
    this.instructionService.getInstructions().subscribe({
      next: (data) => {
        this.instructions = data;
      },
      error: (err) => console.error('Error fetching instructions:', err)
    });

    this.artisanService.getArtisans().subscribe({
      next: (data) => {
        this.artisans = data;
        this.topArtisans = this.artisans.filter(artisan => artisan.top === true).slice(0, 3);
      },
      error: (err) => console.error('Error fetching instructions:', err)
    });
  }
}