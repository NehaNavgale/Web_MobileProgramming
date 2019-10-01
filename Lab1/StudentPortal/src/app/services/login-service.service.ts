import { Injectable } from '@angular/core';
import {RegisterModel} from '../../../models/register';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public editdata = { };
  public id;
  apiUrl = '/login';
  constructor(private http: HttpClient) { }
  authenticate(student) {
    return this.http.post(`${this.apiUrl}`, student);
  }
}
