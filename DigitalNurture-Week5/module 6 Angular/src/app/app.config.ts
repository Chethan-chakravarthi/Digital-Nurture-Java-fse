import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { reducers } from './store';
import { StudentEffects } from './store/effects/student.effects';

export const appConfig: ApplicationConfig = {

  providers: [

    provideZoneChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(reducers),
    provideEffects([StudentEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })

  ]

};
