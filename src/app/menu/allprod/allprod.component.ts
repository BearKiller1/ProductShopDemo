import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-allprod',
  templateUrl: './allprod.component.html',
  styleUrls: ['./allprod.component.css']
})
export class AllprodComponent implements OnInit {
  info:any;
  id = 12;
  constructor(private Obj:DataService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Obj.getAll().subscribe((tmp:any) =>{
      this.info = tmp;
    });
  }
}
