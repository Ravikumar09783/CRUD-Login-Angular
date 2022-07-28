import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log("ROUTER",this.router.navigate)
  }

  login({ email, password }: any) {
    if (email === 'ravi@gmail.com' && password === 'ravi1234') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Ravi Kumar', email: 'ravi@gmail.com' });
    }
    return throwError(new Error('Failed to Login'));
  }
}
