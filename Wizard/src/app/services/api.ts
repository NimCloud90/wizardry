import { toSignal } from "@angular/core/rxjs-interop";
import { effect, Injectable, signal, WritableSignal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Charsel} from "../player/charsel/charsel";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Api {
    private baseUrl = 'http://localhost:3000/api';
    charsel: WritableSignal<Charsel[]> = signal([]);
    updateSignal: WritableSignal<boolean> = signal(false);
constructor(private http: HttpClient) {
effect(async () => {
    if (this.updateSignal()) {
        this.updateSignal.set(false);
        const charsel = await firstValueFrom(
            this.http.get<Charsel[]>(`${this.baseUrl}/charsel`)
        );
        this.charsel.set(charsel);
        }
    });
    }
}