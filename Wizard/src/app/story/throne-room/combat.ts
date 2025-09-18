import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-combat",
    templateUrl: "./combat.html",
    styleUrls: ["./combat.css"],
    imports: [] 
})
export class Combat {
    constructor(private router: Router) {}
    gotoThroneRoom() {
        this.router.navigate(['/throne-room']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}