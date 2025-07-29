import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player-auth',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, RouterModule],
  templateUrl: './player-auth.html',
  styleUrl: './player-auth.css'
})
export class PlayerAuth {

}
