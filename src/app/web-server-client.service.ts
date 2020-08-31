import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebServerClient {

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<any> {

     return this.http.get<any>('http://localhost:3000/notifications/userId/ca0a038c-581f-4275-9897-6a66231392d3');
  }
}
