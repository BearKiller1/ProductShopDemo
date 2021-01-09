import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data = Array();
  constructor(private route:ActivatedRoute = new ActivatedRoute) { }

  ngOnInit(): void {
    this.data[0] = this.route.snapshot.paramMap.get('userId');
    this.data[1] = this.route.snapshot.paramMap.get('title');
    this.data[2] = this.route.snapshot.paramMap.get('id');
    this.data[3] = this.route.snapshot.paramMap.get('body');
  }

}
