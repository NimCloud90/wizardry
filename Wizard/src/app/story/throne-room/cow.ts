import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-cow',
    templateUrl: './cow.html',
    styleUrls: ['./cow.css'],
    imports: []
})
export class Cow {
    constructor(private router: Router) {}
    gotoDeath() {
        this.router.navigate(['/death']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();
}