import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-union-boy',
    imports: [],
    templateUrl: './union-boy.html',
    styleUrls: ['./union-boy.css']
})
export class UnionBoy {
    constructor(private router: Router) {}
    gotoForest() {
        this.router.navigate(['forest']);
    }

    gotoGetEm() {
        this.router.navigate(['get-em']);
    }

    gotoTalk() {
        this.router.navigate(['talk']);
    }
    @Input() fixed = false;
  year = new Date().getFullYear();

  goToSaves() {
    this.router.navigate(['/saves']);
  }
}