import { Component, OnInit } from '@angular/core';
import {Logement, LogementService} from '../../services/logement.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.page.html',
  styleUrls: ['./detail-logement.page.scss'],
})
export class DetailLogementPage implements OnInit {

  private slug: string;
  public logement: Logement;
  constructor(private route: ActivatedRoute, public logementService: LogementService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.logement = this.logementService.getLogement(this.slug);
  }

}
