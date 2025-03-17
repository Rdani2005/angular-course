import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withFetch, provideHttpClient } from '@angular/common/http';
import { GifsHttpService, GifsService } from './gifs/services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: GifsService, useClass: GifsHttpService },
  ],
};
