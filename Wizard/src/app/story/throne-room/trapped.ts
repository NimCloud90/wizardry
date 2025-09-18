import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-trapped",
  templateUrl: "./trapped.html",
    styleUrls: ["./trapped.css"],
    imports: []
})
export class Trapped {
  constructor(private router: Router) {}
gotoVillage() {
    this.router.navigate(["/village"]);
  }

  gotoTitlePage() {
    this.router.navigate(["/"]);
  }

  @Input() fixed = false;
  year = new Date().getFullYear();

  goToSaves() {
    this.router.navigate(['/saves']);
  }
}