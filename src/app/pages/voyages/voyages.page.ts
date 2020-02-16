import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

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
  bookings;
  self = this;
  constructor(private storage: Storage, private http: HttpClient, public domSanitizer: DomSanitizer) { }
  ionViewWillEnter(){
    this.getUser();
    this.getUserReservations();
  }
  ngOnInit() {
    this.getUser();
    this.getUserReservations();
  }
  getUser() {
    this.storage.get('user').then((user) => {
      this.userLogged = user;
    });
  }
  getUserReservations(): Promise<boolean> {
    const that = this;
    if (this.userLogged.id) {
      return new Promise((resolve) => {
        this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/bookings/read/' + this.userLogged.id).subscribe(data => {
          this.bookings = data;
          resolve(true);
        }, error => {
          console.log(error);
        });
      });
    } else {
      // tslint:disable-next-line:only-arrow-functions
      setTimeout(function() {that.getUserReservations(); }, 100);
    }
  }

}
