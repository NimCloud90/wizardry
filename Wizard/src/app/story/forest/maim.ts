import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-maim',
    imports: [],
    templateUrl: './maim.html',
    styleUrls: ['./maim.css']
})

export class Maim {
    constructor(private router: Router) {}
    gotoDungeon(){
        this.router.navigate(['dungeon']);
    }
    gotoForest(){
        this.router.navigate(['forest']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}