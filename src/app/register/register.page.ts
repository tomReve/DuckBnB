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
  }

}
