import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-union-2",
    templateUrl: "./union-2.html",
    styleUrls: ["./union-2.css"],
    imports: []
})
export class UnionTwo {
    constructor(private router: Router) {}
    gotoForest() {
        this.router.navigate(['forest']);
    }

    gotoMaim() {
        this.router.navigate(['maim']);
    }

    gotoTalk() {
        this.router.navigate(['talk']);

}
@Input() fixed = false;
  year = new Date().getFullYear();
}