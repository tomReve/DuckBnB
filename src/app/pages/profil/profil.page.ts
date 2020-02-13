import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  userLogged = {
    email: '',
    pseudo: ''
  };
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('user').then((user) => {
      this.userLogged = user;
    });
  }
  disconnect() {
    this.storage.set('userAuthenticated', false);
    this.router.navigate(['/login']);
  }

}
