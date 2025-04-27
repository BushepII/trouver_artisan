import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Instruction {
  id: number;
  step: string;
  instruction: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  private jsonUrl = '../assets/data/instructions.json';

  constructor(private http: HttpClient) {}

  getInstructions(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(this.jsonUrl);
  }
}