import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLogementPageRoutingModule } from './detail-logement-routing.module';

import { DetailLogementPage } from './detail-logement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLogementPageRoutingModule
  ],
  declarations: [DetailLogementPage]
})
export class DetailLogementPageModule {}
