import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-door",
    templateUrl: "./door.html",
    styleUrls: ["./door.css"]
})
export class Door {
    constructor(private router: Router) {}

    gotoVillage() {
        this.router.navigate(["/village"]);
    }

    gotoTitlePage() {
        this.router.navigate(["/"]);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();

  goToSaves() {
    this.router.navigate(['/saves']);
  }
}