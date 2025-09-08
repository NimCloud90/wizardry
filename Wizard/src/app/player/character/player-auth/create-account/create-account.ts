import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './create-account.html',
  styleUrls: ['./create-account.css'], // Fixed typo: styleUrl -> styleUrls
})
export class CreateAccount {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.error = 'Username and password are required';
      return;
    }

    console.log('Submitting:', this.username, this.password);
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']); // Navigate to login page after successful registration
      },
      error: (err) => {
        console.error('Registration error:', err); // Log the error for debugging
        this.error = err.error?.message || 'Account creation failed';
      },
    });
  }
}