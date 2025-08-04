import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bad-end',
    templateUrl: './bad-end.html',
    styleUrls: ['./bad-end.css'],
    imports: []
})
export class BadEnd {
    constructor(private router: Router) {}
    gotoTraped() {
        this.router.navigate(['/trapped']);
    }
}