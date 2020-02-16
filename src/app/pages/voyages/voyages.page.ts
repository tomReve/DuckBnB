import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.page.html',
  styleUrls: ['./voyages.page.scss'],
})
export class VoyagesPage implements OnInit {
  userLogged = {
    email: '',
    pseudo: '',
    id: ''
  };
  bookings = '';
  self = this;
  constructor(private storage: Storage, private http: HttpClient) { }

  ngOnInit() {
    this.getUser();
    this.getUserReservations();
  }
  getUser() {
    this.storage.get('user').then((user) => {
      this.userLogged = user;
    });
  }
  getUserReservations() {
    const that = this;
    if (this.userLogged.id) {
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/bookings/read/4')
          .subscribe(data => {
            console.log(data);
          }, error => {
            console.log('erreur');
          });
    } else {
      // tslint:disable-next-line:only-arrow-functions
      setTimeout(function() {that.getUserReservations(); }, 100);
    }
  }

}
