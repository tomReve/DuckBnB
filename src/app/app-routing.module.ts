import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs/voyages/:id',
    loadChildren: () => import('./pages/detail-voyage/detail-voyage.module').then( m => m.DetailVoyagePageModule)
  },
  {
    path: 'tabs/messages/:id',
    loadChildren: () => import('./pages/detail-message/detail-message.module').then( m => m.DetailMessagePageModule)
  },
  {
    path: 'tabs/logement/:slug',
    loadChildren: () => import('./pages/detail-logement/detail-logement.module').then( m => m.DetailLogementPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
