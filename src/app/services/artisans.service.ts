import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Artisan {
  id: number;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private jsonUrl = '../assets/data/datas.json';

  constructor(private http: HttpClient) {}

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.jsonUrl);
  }

  searchArtisans(query: string): Observable<Artisan[]> {
    const normalizedQuery = this.normalizeText(query);

    return this.getArtisans().pipe(
      map(artisans =>
        artisans.filter(artisan =>
          this.normalizeText(artisan.name).includes(normalizedQuery) ||
          this.normalizeText(artisan.specialty).includes(normalizedQuery) ||
          this.normalizeText(artisan.category).includes(normalizedQuery) ||
          this.normalizeText(artisan.location).includes(normalizedQuery)
        )
      )
    );
  }

  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')  // Remove accents
      .replace(/[\u0300-\u036f]/g, '')  // Remove diacritics
      .replace(/\s+/g, ' ') // Normalize multiple spaces
      .trim();
  }
}