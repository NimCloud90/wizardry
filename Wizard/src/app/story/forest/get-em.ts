import { Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-get-em',
    imports: [],
    templateUrl: './get-em.html',
    styleUrls: ['./get-em.css']
})

export class GetEm {
    constructor(private router: Router) {}
    gotoDungeon() {
        this.router.navigate(['dungeon']);
    }

    gotoForest() {
        this.router.navigate(['forest']);
    }

    gotoUnionTwo() {
        this.router.navigate(['union-2']);
}
}