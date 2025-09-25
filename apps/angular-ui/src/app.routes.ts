import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./app.component').then((m) => m.AppComponent),
    },
    {
        path: 'contact-us',
        loadComponent: () =>
            import('./contact-us/contact-us.component').then((m) => m.ContactUsComponent),
    },
];
