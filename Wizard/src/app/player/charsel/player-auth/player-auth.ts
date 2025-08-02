import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-auth',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './player-auth.html',
  styleUrl: './player-auth.css'
})
export class PlayerAuth {
  constructor(private router: Router) {}
  gotoCharsel() {
this.router.navigate(['charsel']);
}

gotoCreateAccount() {
this.router.navigate(['create-account']);
}



}