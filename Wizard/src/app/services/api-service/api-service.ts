import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api/saves'; // your backend URL

  constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/data`);
  // }
  async loadSave(){
    const data = await firstValueFrom(this.http.get(`${this.baseUrl}/data`
    ))
    return data
  }
}