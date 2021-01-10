import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-allprod',
  templateUrl: './allprod.component.html',
  styleUrls: ['./allprod.component.css']
})
export class AllprodComponent implements OnInit {
  info:any;
  id = 12;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.Obj.getAll().subscribe((tmp:any) =>{
      this.info = tmp;
    });
  }
}
