import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-fire",
    templateUrl: "./fire.html",
    styleUrls: ["./fire.css"],
    imports: []
})
export class Fire {
    constructor(private router: Router) {}
    gotoDoor() {
        this.router.navigate(["/door"]);
    }
}