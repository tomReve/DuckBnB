import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerCredential = {
    pseudo: '',
    email : '',
    password: ''
  };
  erreur = '';
  constructor(private router: Router, private storage: Storage, private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    console.log(this.registerCredential);

    if (this.registerCredential.email && this.registerCredential.password && this.registerCredential.pseudo) {
      // tslint:disable-next-line:max-line-length
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/user/register/' + this.registerCredential.pseudo + '/' + this.registerCredential.email + '/' + this.registerCredential.password)
          .subscribe(data => {
            console.log(data);
            // @ts-ignore
            if (data.message) {
                // @ts-ignore
              this.erreur = data.message;
              console.log(this.erreur);
            } else {
              this.router.navigate(['/login']);
            }
          }, error => {
            console.log('erreur');
          });
    }
  }

}
