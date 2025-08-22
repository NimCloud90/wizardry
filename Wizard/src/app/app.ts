import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from './player/character/character';
import { ApiService } from './services/api-service/api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Wizard';
}
