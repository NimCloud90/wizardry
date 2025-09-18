import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-death',
    templateUrl: './death.html',
    styleUrls: ['./death.css'],
    imports: []
})
export class Death {
    constructor(private router: Router) {}
    gotoVillage() {
        this.router.navigate(['/']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();

  goToSaves() {
    this.router.navigate(['/saves']);
  }
}