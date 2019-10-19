import { Injectable } from '@angular/core';
import {RegisterModel} from '../../../models/register';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loggedEmailID;
  public editdata = { };
  public id;
  apiUrl = '/login';
  constructor(private http: HttpClient) { }
  // function to check authentication of user
  authenticate(student) {
    return this.http.post(`${this.apiUrl}`, student);
  }
  // funcion to set the local storage variable with logged in user's email id
  setUsers(data) {
    console.log('Inside SetUsers');
    console.log(data);
    console.log(this.loggedEmailID);
    localStorage.setItem('LoggedinEmailId', data.loggedStudent.emailID);
  }
  // function to get the loggedin user email id
  getUsers() {
    this.loggedEmailID = localStorage.getItem('LoggedinEmailId');
    return this.loggedEmailID;
  }
  // function to logout by removing local storage
  logout() {
    localStorage.removeItem('LoggedinEmailId');
  }
}
