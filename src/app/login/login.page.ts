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
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/users/' + this.loginCredential.email + '/logins/' + this.loginCredential.password)
            .subscribe(data => {
              console.log(data);
              if (Array.isArray(data)) {
                this.storage.set('userAuthenticated', true);
                this.storage.set('user', {email : data[0].email, pseudo: data[0].pseudo});
                this.router.navigate(['/']);
              } else {
                this.erreur = 'Informations de connexion incorrects';
              }
            }, error => {
              console.log('erreur');
            });
    }
    // Redirection vers la page d'accueil
  }

}
