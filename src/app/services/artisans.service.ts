import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}