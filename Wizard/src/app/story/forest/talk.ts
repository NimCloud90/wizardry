import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-talk',
    imports: [],
    templateUrl: './talk.html',
    styleUrls: ['./talk.css']
})

export class Talk {
    constructor(private router: Router) {}
    gotoForest() {
        this.router.navigate(['forest']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}