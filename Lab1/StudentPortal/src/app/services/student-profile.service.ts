import { Injectable } from '@angular/core';
import {AllCourseModel} from '../../../models/allCourses.js';
import {RegisterCourse} from '../../../models/studentProfile.js';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/studentProfile';


@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }


  constructor(private http: HttpClient) { }
  // function to add student profile
  // addStudentProfile(data): Observable<any> {
  //   return this.http.post(apiUrl, data, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  // function to get the student profile
  getStudentProfile(emailAddress: string): Observable<any> {
    const url = `${apiUrl}/getProfile?emailAddress=` + emailAddress;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  // function to create student profile
  postStudentprofile(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // function to update the profile
  updateStudentProfile(emailAddress: string, data): Observable<any> {
    const url = `${apiUrl}/updateProfile?emailAddress=` + emailAddress;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
