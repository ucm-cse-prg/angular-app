import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { httpErrorInterceptor } from '@core/http-error.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const httpInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: httpErrorInterceptor,
        multi: true
    },
    // {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: loggingInterceptor,
    //     multi: true
    // }
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()), // DI-based interceptors must be explicitly enabled.
        httpInterceptors,
        provideAnimationsAsync(), // Enable async animations
    ]
};

