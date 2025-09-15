import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from "../services/auth-service";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule]
})
export class LoginComponent {
    playername = '';
    password = '';
    error = '';

    constructor(private auth: AuthService, private router: Router) {}

    onSubmit() {
    //     this.auth.login(this.playername, this.password).subscribe({
    //       next: (res) => {
    //         console.log('Login success:', res);
    //         // maybe navigate after login:
    //         // this.router.navigate(['/dashboard']);
    //       },
    //       error: (err) => {
    //         console.error('Login error:', err);
    //         this.error = 'Invalid credentials. Please try again.';
    //       }
    //     });
    //   }
    this.router.navigate(['village']);
    }
}