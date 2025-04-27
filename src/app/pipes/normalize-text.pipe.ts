import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'normalizeText'
})
@Injectable({
  providedIn: 'root'
})
export class NormalizeTextPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '')
      .toLowerCase();
  }
}
