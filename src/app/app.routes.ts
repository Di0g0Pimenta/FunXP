import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./pages/camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.page').then( m => m.NewsPage)
  },
  {
    path: 'edit',
    loadComponent: () => import('./pages/edit/edit.page').then( m => m.EditPage)
  },
];
