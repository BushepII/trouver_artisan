import { RenderMode, ServerRoute } from '@angular/ssr';
import { ArtisanService } from './services/artisans.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'artisan/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(ArtisanService);
      const ids = await firstValueFrom(dataService.getIds()); // Assuming this returns ['1', '2', '3']

      return ids.map(id => ({ id })); // Transforms IDs into an array of objects for prerendering
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
