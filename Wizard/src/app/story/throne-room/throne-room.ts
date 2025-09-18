import { Component, Input } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-throne-room',
  imports: [CommonModule, FormsModule],
  templateUrl: './throne-room.html',
  styleUrl: './throne-room.css'
})
export class ThroneRoom {
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