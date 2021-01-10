import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  sub:any;
  min:any;
  max:any;
  data:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): void {
    this.data = [];
    this.min = this.route.snapshot.paramMap.get('min');
    this.max = this.route.snapshot.paramMap.get('max');
    for (let i = this.min; i <= this.max; i++) {
      this.Obj.getById(i).subscribe( (tmp:any) =>{
        var tmp = tmp[0];
        this.data.push(tmp);
        console.log(this.data);
      })
    }
  }

}
