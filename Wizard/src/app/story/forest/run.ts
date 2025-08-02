import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'app-run',
    imports: [],
    templateUrl: './run.html',
    styleUrls: ['./run.css']
})
export class Run {
    constructor(private router: Router) {}
gotoForest2() {
    this.router.navigate(['forest-2']);
}

gotoDungeon() {
    this.router.navigate(['dungeon']);
}

gotoForest() {
    this.router.navigate(['forest']);
}
}