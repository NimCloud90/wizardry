import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-fight',
    imports: [],
    templateUrl: './fight.html',
    styleUrls: ['./fight.css']
})

export class Fight {
    constructor(private router: Router) {}
gotoForest2() {
    this.router.navigate(['forest-2']);
}

gotoDungeon() {
    this.router.navigate(['dungeon']);
}
@Input() fixed = false;
  year = new Date().getFullYear();
}