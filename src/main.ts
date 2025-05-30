import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      provideHttpClient(withFetch()),
      provideRouter(routes)
    ],
  }).catch((err) => console.error(err));