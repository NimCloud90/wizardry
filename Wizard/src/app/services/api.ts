import { toSignal } from "@angular/core/rxjs-interop";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Charsel} from "../player/charsel/charsel";

@Injectable({
    providedIn: 'root'
})
export class Api {
    private baseUrl = 'http://localhost:3000/api';
    readonly getCharsel;

constructor(private http: HttpClient) {
    this.getCharsel = toSignal(this.http.get<Charsel[]>(`${this.baseUrl}/Charsel`), {initialValue: []
    });
    }
}