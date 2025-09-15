import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-meander',
    templateUrl: './meander.html',
    styleUrls: ['./meander.css'],
    imports: []
})

export class Meander {
    constructor(private router: Router) {}
    gotoDungeon() {
        this.router.navigate(['/dungeon']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}