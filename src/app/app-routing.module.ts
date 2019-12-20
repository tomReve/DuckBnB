import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'detail-voyage',
    loadChildren: () => import('./pages/detail-voyage/detail-voyage.module').then( m => m.DetailVoyagePageModule)
  },
  {
    path: 'detail-message',
    loadChildren: () => import('./pages/detail-message/detail-message.module').then( m => m.DetailMessagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
