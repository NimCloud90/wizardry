import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-union",
    templateUrl: "./union.html",
    styleUrls: ["./union.css"],
    imports: []
})
export class Union {
    constructor(private router: Router) {}
    gotoDungeon() {
        this.router.navigate(["/dungeon"]);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}