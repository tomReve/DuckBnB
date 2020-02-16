import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLogementPage } from './add-logement.page';

const routes: Routes = [
  {
    path: '',
    component: AddLogementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLogementPageRoutingModule {}
