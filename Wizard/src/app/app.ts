import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Charsel } from "./charsel/charsel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Charsel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Wizard';
}
