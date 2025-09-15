import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { GameStateService } from '../../services/game-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-salamander',
    templateUrl: './salamander.html',
    styleUrls: ['./salamander.css'],
    imports: [CommonModule, FormsModule]
})

export class Salamander {
  selectedChoice: string | undefined;
  selectedView: string | undefined;

  constructor(private gameState: GameStateService, private router: Router) {}

  // Method to handle user choice and navigate to the next location
  makeChoice(choice: string) {
    this.router.navigate([`/${choice}`]);
    
}
@Input() fixed = false;
  year = new Date().getFullYear();
}