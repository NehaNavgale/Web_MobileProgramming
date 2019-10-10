import { Injectable } from '@angular/core';
import {AllCourseModel} from '../../../models/allCourses.js';
import {RegisterCourse} from '../../../models/registeredCourse.js';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiRegisterCourse = '/registerCourse';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  allCourse;
  apiUrl = '/allCourse';

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

  constructor(private http: HttpClient) {
  }

  // function to get all the courses
  getAllCourses(): Observable<any> {
    return this.http.get(this.apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // function to get registered courses of logged in user
  getRegisteredCourse(emailAddress: string): Observable<any> {
    return this.http.get(`${apiRegisterCourse}/getCourse?emailAddress=` + emailAddress, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // function to add new course registered by the user
  postRegisteredCourse(data): Observable<any> {
    return this.http.post(apiRegisterCourse, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
