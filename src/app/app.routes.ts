import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home-page/home-page.component').then(m => m.HomePageComponent) },
    { path: 'scene', loadComponent: () => import('./features/scene/scene-page/scene-page.component').then(m => m.ScenePageComponent) },
];
