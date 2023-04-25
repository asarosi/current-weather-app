import { Routes } from '@angular/router';
import { CapitalsComponent } from './capitals/capitals.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    {
        path: 'capitals',
        component: CapitalsComponent,
    },
    {
        path: 'weather',
        component: WeatherComponent,
    },
];
