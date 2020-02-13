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

  constructor(private router: Router, private storage: Storage, private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginCredential);

    if (this.loginCredential.email && this.loginCredential.password && 0 === 1) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      // tslint:disable-next-line:max-line-length
      this.http.post('http://antonintouron.fr/private/duckbnbapi/public/api/users/' + this.loginCredential.email + '/logins/' + this.loginCredential.password, this.loginCredential)
            .subscribe(data => {
              console.log(data);
              this.storage.set('userAuthenticated', true);
            }, error => {
              console.log('erreur');
            });
    }
    // A supprimer
    this.storage.set('userAuthenticated', true);
    // Redirection vers la page d'accueil
    this.router.navigate(['/']);
  }

}
