import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavesService {
  private apiUrl = 'http://localhost:5000/api/saves';  // Node.js backend

  constructor(private http: HttpClient) {}

  saveProgress(playerId: string, progress: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, {
      playerId: playerId,
      progress: JSON.stringify(progress)
    });
  }

  loadProgress(playerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/load/${playerId}`);
  }
}
