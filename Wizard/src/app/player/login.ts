import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, AuthResponse } from "../services/auth-service";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
    loginForm: FormGroup;
    error: string = '';
    loading: boolean = false;
  
    constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
        playername: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  
    submit(): void {
      if (this.loginForm.invalid) return;
  
      this.loading = true;
      this.error = '';
  
      const { playername, password } = this.loginForm.value;
  
      this.auth.login(playername, password).subscribe({
        next: (res: AuthResponse) => {
          console.log('✅ Login successful:', res);
          this.router.navigate(['/village']);
          this.loading = false;
        },
        error: (err) => {
          console.error('❌ Login failed:', err);
          this.error = err.error?.error || 'Login failed. Please try again.';
          this.loading = false;
        },
      });
    }
  }