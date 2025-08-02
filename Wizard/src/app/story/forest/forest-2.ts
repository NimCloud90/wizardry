import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-forest-2',
    imports: [],
    templateUrl: './forest-2.html',
    styleUrls: ['./forest-2.css']
})
export class Forest2 {
    constructor(private router: Router) {}
    gotoDungeon() {
        this.router.navigate(['dungeon']);
    }
    gotoUnionBoy() {
        this.router.navigate(['union-boy']);
    }
    
    gotoForest() {
        this.router.navigate(['forest']);
    }
}