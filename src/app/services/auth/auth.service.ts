import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  baseURL = 'http://localhost:3000/resto';
  loginUser:string='http://localhost:3000/users';
  check:any;

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logoutAuth() {
    console.log('Logout success');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }






  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin' && password === 'admin') {
  //     this.setToken('Ravikumar');
  //     return of({ name: 'Ravi Kumar', email: 'ravi@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }






 login({ email, password }: any): Observable<any> {
    if (email === 'admin' && password === 'admin') {
      this.setToken('Ravikumar');
      console.log("TEMPORARY")
      return of({ name: 'Ravi Kumar', email: 'ravi@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  getRestoData() {
    return this.http.get('http://localhost:3000/resto');
  }
  getCurrentResto(id: number) {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }
  updateRestoDatas(id: number, data: any) {
    return this.http.put<any>(`${this.baseURL}/${id}`, data);
  }

  deleteResto(id: number) {
    return this.http.delete<any>(`${this.baseURL}/${id}`);
  }
  createNewRestaurant(data: any) {
    // return this.http.post(this.baseURL)
    return this.http.post<any>(`${this.baseURL}`, data);
  }

  getLoginData(){
    return this.http.get<any>(`${this.loginUser}`)
  }

  forgotPassword(){
    return this.http.get(`http://localhost:3000/users`)

  }


}
