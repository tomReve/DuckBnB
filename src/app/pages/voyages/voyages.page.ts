import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { DetailVoyagePage } from '../detail-voyage/detail-voyage.page';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.page.html',
  styleUrls: ['./voyages.page.scss'],
})
export class VoyagesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
