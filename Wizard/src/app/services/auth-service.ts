import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  register(playername: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { playername, password });
  }

  // login(playername: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, { playername, password }).pipe(
  //     tap((res: any) => {
  //       if (res.token) {
  //         localStorage.setItem('token', res.token);
  //       }
  //     })
  //   );
  // }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
