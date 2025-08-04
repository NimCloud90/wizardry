import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-maim',
    imports: [],
    templateUrl: './maim.html',
    styleUrls: ['./maim.css']
})

export class Maim {
    constructor(private router: Router) {}
    gotoUnion(){
        this.router.navigate(['union']);
    }
}