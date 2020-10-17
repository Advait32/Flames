import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Fly } from './fly';

@Injectable({
  providedIn: 'root'
})
export class FlameService {
  F = new Fly();
  configUrl='https://cs251-outlab-6.herokuapp.com/initial_values/'
  constructor( private http: HttpClient,) { }


getdata():Observable<any>{
  return this.http.get('https://cs251-outlab-6.herokuapp.com/initial_values/')
}

post(F):Observable<any>{
  return this.http.post('https://cs251-outlab-6.herokuapp.com/add_new_feedback/',F)
}
}




