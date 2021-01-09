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

  data:any;
  filtId(id:any){
    var number = id.target.value;
    this.Obj.getBy(number).subscribe( (data:any) =>{
      this.data = data[0];
    });
  }

  ngOnInit(): void {
  }

}
