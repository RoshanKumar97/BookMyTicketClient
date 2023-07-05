import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/bmt';

  public isLoginStatus: boolean = false;
  public userId: number = 0;
  public userName: string ="";

  getLoginStatus() {
    return this.isLoginStatus;
  }
  setLoginStatus(status: any) {
    this.isLoginStatus = status;
    sessionStorage.setItem('isLoggedIn', status)
  }

  getCustomerId() {
    return this.userId;
  }

  setCustomerId(id: any) {
    this.userId = id;
  }

  setCustomerName(name: string) {
    this.userName = name;
    sessionStorage.setItem('username',name);
  }

  constructor(private httpClient: HttpClient) {}

  login(mobile: any): Observable<User> {
    return this.httpClient
      .get<User>(this.url + '/user/login/' + mobile)
      .pipe(catchError(this.handleError));
  }

  logout(): Observable<any> {
    this.isLoginStatus = false;
    sessionStorage.removeItem('isLoggedIn')
    return this.httpClient
      .get<Login>(this.url + '/logout')
      .pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
