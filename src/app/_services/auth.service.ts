import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../_interfaces/auth-response-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  API_KEY = 'AIzaSyAuUHpZm38t_A7aM6xrBd5QUlWrUqF4IYM';

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `${this.SIGN_UP}${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `${this.SIGN_IN}${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }
}
