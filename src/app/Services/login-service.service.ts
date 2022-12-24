import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 

  constructor(private http: HttpClient) { }

  postRegisterNewUser(data:any): Observable<any>{
    return this.http.post("http://localhost:5000/api/auth/register", data).pipe(catchError(this.handleError));;
  }

  getUserDetails(): Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/auth/register");
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.name);
  }
}
