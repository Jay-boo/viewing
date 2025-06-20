import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'gallery',
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    loadChildren:()=> import('./features/photo-gallery/photo-gallery-module').then(m=> m.PhotoGalleryModule)
  }
];
