import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-snail-fight",
    templateUrl: "./snail-fight.html",
    styleUrls: ["./snail-fight.css"],
    imports: []
})
export class SnailFight {
    constructor(private router: Router) {}
    gotoThroneRoom() {
        this.router.navigate(['/throne-room']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}