import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-page',
  imports: [],
  templateUrl: './title-page.html',
  styleUrl: './title-page.css'
})
export class TitlePage {
  constructor(private router: Router) {}
gotoCreateAccount() {
this.router.navigate(['create-account']);
}
@Input() fixed = false;
  year = new Date().getFullYear();
}