import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-befriend',
    templateUrl: './befriend.html',
    styleUrls: ['./befriend.css'],
    imports: []
})
export class Befriend {
    constructor(private router: Router) {}
    gotoThroneRoom() {
        this.router.navigate(['/throne-room']);
    }

    @Input() fixed = false;
  year = new Date().getFullYear();
}