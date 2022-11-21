import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, Observable, Subject, tap } from 'rxjs';
import { AuthResponseData } from '../_interfaces/auth-response-data.interface';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  API_KEY = 'AIzaSyAuUHpZm38t_A7aM6xrBd5QUlWrUqF4IYM';

  userSubject = new Subject<User>();

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `${this.SIGN_UP}${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    )
    .pipe(
      // catchError((error)=> {
      //   // not finished...
      // }),
      tap(res => {
        this.handleAuthentication(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        )
      })
    );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.userSubject.next(user);
  }

  signIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `${this.SIGN_IN}${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    ).pipe(
      tap(res => {
        this.handleAuthentication(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        )
      })
    );
  }
}
