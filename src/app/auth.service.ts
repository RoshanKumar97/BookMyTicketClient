import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  username$: Observable<string> = this.usernameSubject.asObservable();

  constructor() {}

  setLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
    sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
    sessionStorage.setItem('username', username);
  }

  getLoggedIn(): boolean {
    return this.isLoggedInSubject.getValue();
  }
}
