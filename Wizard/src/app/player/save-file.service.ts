import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class SaveFileService {
private baseUrl = 'http://localhost:3000/api';

constructor(private http: HttpClient) {}

    saveFile(data: any) {
    return this.http.post(`${this.baseUrl}/save`, data);
}
}