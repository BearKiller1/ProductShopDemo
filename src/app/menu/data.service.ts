import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  link = "https://jsonplaceholder.typicode.com/posts";
  test = Array("asdasd","asdasd");
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.link);
  }
  getBy(id:any){
    return this.http.get(this.link +'?id='+id);
  }
}
