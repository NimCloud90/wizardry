import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from "../services/auth-service";

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    imports: [MatFormFieldModule, MatInputModule, FormsModule]
})
export class Login {
    username = '';
    password = '';
    error = '';

    constructor(private auth: AuthService, private router: Router) {}

    onSubmit(): void {
        this.auth.login(this.username, this.password).subscribe({next: () => {
            this.router.navigate(['Village']);
        },
    error: (err) => {
        this.error = err.error?.message || 'Login failed';
    },
    });
    }
}