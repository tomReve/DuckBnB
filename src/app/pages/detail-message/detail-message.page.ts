import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.page.html',
  styleUrls: ['./detail-message.page.scss'],
})
export class DetailMessagePage implements OnInit {

  private id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
