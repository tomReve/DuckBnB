import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
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
  },  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
