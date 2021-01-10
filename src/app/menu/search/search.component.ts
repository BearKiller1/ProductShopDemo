import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sub:any;
  id:any;
  data:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( (tmp:any) =>{
      this.id = tmp.get("id");
    });

    this.Obj.getById(this.id).subscribe( (tmp:any) => {
      this.data = tmp[0];
      console.log(this.data);
    })
  }

}
