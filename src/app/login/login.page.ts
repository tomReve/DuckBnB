import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginCredential = {
    email : '',
    password: ''
  };
  erreur = '';

  constructor(private router: Router, private storage: Storage, private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginCredential);

    if (this.loginCredential.email && this.loginCredential.password) {
      // tslint:disable-next-line:max-line-length
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/user/login/' + this.loginCredential.email + '/' + this.loginCredential.password)
            .subscribe(data => {
              console.log(data);
              if (data.message) {
                this.erreur = 'Informations de connexion incorrects';
              } else {
                this.storage.set('userAuthenticated', true);
                this.storage.set('user', {email : data.email, pseudo: data.pseudo, id: data.id});
                this.router.navigate(['/']);
              }
            }, error => {
              console.log('erreur');
            });
    }
    // Redirection vers la page d'accueil
  }

}
