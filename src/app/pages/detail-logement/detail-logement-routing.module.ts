import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLogementPage } from './detail-logement.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLogementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLogementPageRoutingModule {}
