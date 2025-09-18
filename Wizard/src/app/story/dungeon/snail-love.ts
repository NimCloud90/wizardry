import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-snail-love",
    templateUrl: "./snail-love.html",
    styleUrls: ["./snail-love.css"],
    imports: []
})
export class SnailLove {
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