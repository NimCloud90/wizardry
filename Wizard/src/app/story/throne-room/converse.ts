import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-converse",
  templateUrl: "./converse.html",
    styleUrls: ["./converse.css"],
    imports: []
})
export class Converse {
  constructor(private router: Router) {}
  gotoVillage() {
    this.router.navigate(["/village"]);
  }

  gotoTitlePage() {
    this.router.navigate(["/"]);
  }
}