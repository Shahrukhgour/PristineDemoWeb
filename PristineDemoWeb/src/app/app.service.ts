import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient){}
  getConfig(json: any): Observable<any>{
    let url ="https://social.pristinebs.com/api/Demo/DemoClientInsert"
    return this.http.post(url,json);
  }
}
