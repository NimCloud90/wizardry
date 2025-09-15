import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-good-end",
    templateUrl: "./good-end.html",
    styleUrls: ["./good-end.css"],
    imports: []
})
export class GoodEnd {
    constructor(private router: Router) {}
    gotoConverse() {
        this.router.navigate(["/converse"]);
    }

    @Input() fixed = false;
  year = new Date().getFullYear();
}