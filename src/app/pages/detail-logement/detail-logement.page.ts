import { Component, OnInit } from '@angular/core';
import {Logement, LogementService} from '../../services/logement.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.page.html',
  styleUrls: ['./detail-logement.page.scss'],
})
export class DetailLogementPage implements OnInit {

  private id: string;
  public logement: Logement;
  constructor(private route: ActivatedRoute, public logementService: LogementService) { }

  ngOnInit() {
    this.logementService.load();
    this.id = this.route.snapshot.paramMap.get('id');
    this.logement = this.logementService.getLogement(+this.id);
    console.log(this.logement);
  }

}
