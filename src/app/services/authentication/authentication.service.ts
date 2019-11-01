import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ADMIN} from '../../mock-data/admin-mock';
import {User} from '../../domain/User';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogging;
  user: User = {
    login: '',
    password: ''
  };
  postUser = new Subject();
  userReader = this.postUser.asObservable();
  constructor(
    private router: Router,
  ) { }

  getUser(value) {
    localStorage.setItem('user', JSON.stringify(value));
    this.isLogging = JSON.parse(localStorage.getItem('user'));
    this.postUser.next(this.isLogging);
  }

  getAdminReader() {
   return this.userReader.pipe(tap(val => val));
  }

  checkUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.login === ADMIN.login && user.password === ADMIN.password) {
      return true;
    }
    this.router.navigateByUrl('/consumer-view');
    return false;
  }
}
