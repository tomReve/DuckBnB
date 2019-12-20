import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.page.html',
  styleUrls: ['./voyages.page.scss'],
})
export class VoyagesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openVoyageDetailInTab() {
    this.router.navigateByUrl('/tabs/voyages/detail');
  }

}
