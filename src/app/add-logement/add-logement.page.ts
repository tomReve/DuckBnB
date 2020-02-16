import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
  erreur = '';
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  addLogement() {
    console.log(this.logement);
    if (this.logement.title) {
      // tslint:disable-next-line:max-line-length
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/housing/create/' + this.logement.title + '/' + this.logement.description + '/' + this.logement.price + '/' + this.logement.address + '/' + this.logement.nb_bed + '/' + this.logement.nb_room + '/' + this.logement.nb_traveler_max)
          .subscribe(data => {
            console.log(data);
            // @ts-ignore
            if (data.code === 201) {
              this.router.navigate(['/']);
            } else {
              // @ts-ignore
              this.erreur = data.message;
            }
          }, error => {
            console.log('erreur');
          });
    }
  }

}
