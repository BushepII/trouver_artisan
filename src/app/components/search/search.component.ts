import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisans.service';
import { CardArtisanComponent } from '../card-artisan/card-artisan.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CardArtisanComponent, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private route = inject(ActivatedRoute);
  private artisanService = inject(ArtisanService);

  query: string = '';

  filteredArtisans: Artisan[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      this.artisanService.searchArtisans(this.query).subscribe(data => {
        this.filteredArtisans = data;
      });
    });
  }
}