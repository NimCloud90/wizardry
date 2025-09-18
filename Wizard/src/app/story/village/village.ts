import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameStateService } from '../../services/game-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-village',
  templateUrl: './village.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./village.css']
})
export class Village {
  selectedChoice: string | undefined;
  selectedView: string | undefined;

  constructor(private gameState: GameStateService, private router: Router) {}

  // Method to handle user choice and navigate to the next location
  makeChoice(choice: string) {
    this.router.navigate([`/${choice}`]);
  }

  // Getter to access the current location
  get currentLocation() {
    return this.gameState.currentLocation();
  }

  @Input() fixed = false;
  year = new Date().getFullYear();

  goToSaves() {
    this.router.navigate(['/saves']);
  }
}

