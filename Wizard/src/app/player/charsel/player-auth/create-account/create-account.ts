import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'

@Component({
  selector: 'app-create-account',
  imports: [RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})

export class CreateAccount {

}
