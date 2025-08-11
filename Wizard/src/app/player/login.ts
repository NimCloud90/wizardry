import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    imports: [MatFormFieldModule, MatInputModule, FormsModule]
})
export class Login {
    constructor(private router: Router) {}
    gotoCharacter() {
        this.router.navigate(['charsel']);
    }
}