import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-kiss',
    imports: [],
    templateUrl: './kiss.html',
    styleUrls: ['./kiss.css']
})

export class Kiss {
    constructor(private router: Router) {}
    gotoDungeon() {
        this.router.navigate(['dungeon']);
    }
}