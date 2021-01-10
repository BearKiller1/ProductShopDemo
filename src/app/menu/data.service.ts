import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  link = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.link);
  }
  getById(id:any){
    return this.http.get(this.link + "?id="+id);
  }
}
