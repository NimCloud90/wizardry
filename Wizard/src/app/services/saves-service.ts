
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SaveFile {
  name: string;
  data: any;
  createdAt?: string; // optional — provided by backend
}

@Injectable({
  providedIn: 'root',
})
export class SavesService {
  private apiUrl = 'http://localhost:5000/api/saves';

  constructor(private http: HttpClient) {}

  // ✅ Save or overwrite a save slot
  saveProgress(playerId: string, payload: { name: string; data: any }): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, { playerId, ...payload });
  }

  // ✅ Load all saves for a player
  loadProgress(playerId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/load/${playerId}`);
  }

  // ✅ Delete a save by name
  deleteSave(playerId: string, name: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${playerId}/${name}`);
  }
}