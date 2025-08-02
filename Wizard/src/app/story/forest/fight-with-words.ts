import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-fight-with-words',
    imports: [],
    templateUrl: './fight-with-words.html',
    styleUrls: ['./fight-with-words.css']
})

export class FightWithWords {
    constructor(private router: Router) {}
    gotoForest() {
    this.router.navigate(['forest']);
}
}