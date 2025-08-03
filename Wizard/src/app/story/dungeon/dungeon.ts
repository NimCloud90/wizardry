import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameStateService } from '../../services/game-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dungeon',
  imports: [CommonModule, FormsModule],
  templateUrl: './dungeon.html',
  styleUrl: './dungeon.css'
})
export class Dungeon {
  selectedChoice: string | undefined;
  selectedView: string | undefined;

  constructor(private gameState: GameStateService, private router: Router) {}

  // Method to handle user choice and navigate to the next location
  makeChoice(choice: string) {
    this.router.navigate([`/${choice}`]);
  }

}
