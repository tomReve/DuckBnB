import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogementService} from '../../services/logement.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, public logementService: LogementService, public domSanitizer: DomSanitizer,private http: HttpClient) { }

  ngOnInit() {
    this.logementService.load();
  }

  setFilteredItems(evt) {
    const searchTerm = evt.target.value;
    if (searchTerm) {
      this.logementService.getFilteredLogement(searchTerm);
    }
  }

  cancelFilter(evt) {
    this.logementService.load();
  }
}
