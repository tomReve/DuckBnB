import { Component, OnInit } from '@angular/core';
import {Logement, LogementService} from '../../services/logement.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.page.html',
  styleUrls: ['./detail-logement.page.scss'],
})
export class DetailLogementPage implements OnInit {

  private slug: string;
  logement: Logement;
  booking = {
    dateDebut: '',
    dateFin: ''
  };
  message = '';
  userLogged = {
    email: '',
    pseudo: '',
    id : ''
  };
  erreur = '';
  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, private route: ActivatedRoute, public logementService: LogementService, public domSanitizer: DomSanitizer, private storage: Storage, private http: HttpClient) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.logement = this.logementService.getLogement(this.slug);
    this.storage.get('user').then((user) => {
      this.userLogged = user;
    });
    console.log(this.logement);
  }
  book() {
    console.log(this.booking);

    if (this.booking.dateDebut && this.booking.dateFin) {
      // tslint:disable-next-line:max-line-length
      this.http.get('http://antonintouron.fr/private/duckbnbapi/public/api/booking/create/' + this.userLogged.id + '/' + this.logement.id + '/' + this.booking.dateDebut + '/' + this.booking.dateFin)
          .subscribe(data => {
            console.log(data);
            // @ts-ignore
            if (data.code === 201) {
              this.router.navigate(['/tabs/voyages']);
            }
          }, error => {
            console.log('erreur');
          });
    }
  }

}
