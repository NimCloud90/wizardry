import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, AuthResponse } from '../../../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrls: ['./create-account.css'], // Fixed typo: styleUrl -> styleUrls
})
export class CreateAccount {
  createForm: FormGroup;
  error: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm = this.fb.group({
      playername: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.createForm.invalid) return;

    const { playername, password, confirmPassword } = this.createForm.value;

    if (password !== confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.loading = true;
    this.error = '';

    this.auth.register(playername, password).subscribe({
      next: (res: AuthResponse) => {
        console.log('✅ Registration successful:', res);
        this.router.navigate(['/village']);
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Registration error:', err);
        this.error = err.error?.error || 'Registration failed. Please try again.';
        this.loading = false;
      },
    });
  }
}