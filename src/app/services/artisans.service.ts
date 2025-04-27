import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NormalizeTextPipe } from '../pipes/normalize-text.pipe';

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

  constructor(private http: HttpClient, private normalizePipe: NormalizeTextPipe) {}

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.jsonUrl);
  }

  searchArtisans(query: string): Observable<Artisan[]> {
    const normalizedQuery = this.normalizePipe.transform(query);

    return this.getArtisans().pipe(
      map(artisans =>
        artisans.filter(artisan =>
          this.normalizePipe.transform(artisan.name).includes(normalizedQuery) ||
          this.normalizePipe.transform(artisan.specialty).includes(normalizedQuery) ||
          this.normalizePipe.transform(artisan.category).includes(normalizedQuery) ||
          this.normalizePipe.transform(artisan.location).includes(normalizedQuery)
        )
      )
    );
  }
}