import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLogementPageRoutingModule } from './add-logement-routing.module';

import { AddLogementPage } from './add-logement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLogementPageRoutingModule
  ],
  declarations: [AddLogementPage]
})
export class AddLogementPageModule {}
