import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-surrender",
    templateUrl: "./surrender.html",
    styleUrls: ["./surrender.css"],
    imports: []
})
export class Surrender {
constructor(private router: Router) {}
    gotoThroneRoom() {
        this.router.navigate(['/throne-room']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}