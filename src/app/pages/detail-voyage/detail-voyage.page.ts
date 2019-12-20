import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-voyage',
  templateUrl: './detail-voyage.page.html',
  styleUrls: ['./detail-voyage.page.scss'],
})
export class DetailVoyagePage implements OnInit {

  private id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
