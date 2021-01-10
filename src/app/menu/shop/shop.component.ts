import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private Obj:DataService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  filt = false;
  data:any;
  first:any;
  second:any;

  min(x:any){
    this.first = x.target.value;
  }
  max(x:any){
    this.second = x.target.value;
  }
  minmaxfilt(){
    this.router.navigate(
      ["filter",this.first,this.second],
      {relativeTo:this.route}
    )
  }
  filtId(id:any){
    this.data = id.target.value;
    this.router.navigate(
      ["search",this.data],
      {relativeTo:this.route}
    )
  }
  ngOnInit(): void {
  }

}
