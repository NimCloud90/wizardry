import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-flee',
    templateUrl: './flee.html',
    styleUrls: ['./flee.css'],
    imports: []
})
export class Flee {
    constructor(private router: Router) {}
    gotoThroneRoom() {
        this.router.navigate(['/throne-room']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();

  goToSaves() {
    this.router.navigate(['/saves']);
  }
}