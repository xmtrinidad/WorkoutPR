import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  }

  authenticateUser(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers});
  }

  getUserInfo() {
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get<User>('http://localhost:3000/users/dashboard', {headers: headers});
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
