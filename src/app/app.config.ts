import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),

    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
      }),

      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Initialize Firebase
      provideAuth(() => getAuth()), // Provide Firebase Authentication
      provideFirestore(() => getFirestore()), // Provide Firestore
  ]
};
