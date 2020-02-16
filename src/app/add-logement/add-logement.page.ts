import { Component, OnInit } from '@angular/core';

export interface Logement {
  id: number;
  title: string;
  description: string;
  price: number;
  address: string;
  nb_bed: number;
  nb_room: number;
  nb_traveler_max: number;
  creation_at: string;
  slug: string;
  picture: string;
}

@Component({
  selector: 'app-add-logement',
  templateUrl: './add-logement.page.html',
  styleUrls: ['./add-logement.page.scss'],
})
export class AddLogementPage implements OnInit {
  logement = {
    title: '',
    description: '',
    price: '',
    address: '',
    nb_bed: '',
    nb_room: '',
    nb_traveler_max: '',
  };
  constructor() { }

  ngOnInit() {
  }
  addLogement() {
    console.log(this.logement);
  }

}
