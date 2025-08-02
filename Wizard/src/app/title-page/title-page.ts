import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-page',
  imports: [],
  templateUrl: './title-page.html',
  styleUrl: './title-page.css'
})
export class TitlePage {
  constructor(private router: Router) {}
gotoPlayerAuth() {
this.router.navigate(['player-auth']);
}
}