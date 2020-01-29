import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogementService} from '../../services/logement.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router: Router, public logementService: LogementService, public domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.logementService.load();
  }

}
