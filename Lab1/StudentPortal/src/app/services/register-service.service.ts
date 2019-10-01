import { Injectable } from '@angular/core';
import {RegisterModel} from '../../../models/register';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  public editdata = { };
  public id;

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  // getCustomers(): Observable<any> {
  //   return this.http.get(apiUrl, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }
  registerStudent(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // updateCustomerData(id: string, data): Observable<any> {
  //   return this.http.put(`${apiUrl}/${id}`, data, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  //
  // deleteCustomer(id: string): Observable<{}> {
  //   return this.http.delete(`${apiUrl}/${id}`, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
}
