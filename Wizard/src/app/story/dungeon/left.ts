import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-left",
    templateUrl: "./left.html",
    styleUrls: ["./left.css"],
    imports: []
})

export class Left {
    constructor(private router: Router) {}
    gotoSurrender() {
        this.router.navigate(['/surrender']);
    }
    gotoSnailLove() {
        this.router.navigate(['/snail-love']);
    }
    gotoSnailFight() {
        this.router.navigate(['/snail-fight']);
    }
}