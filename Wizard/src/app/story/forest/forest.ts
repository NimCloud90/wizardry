import { Component, Input } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { GameStateService } from '../../services/game-state.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-forest',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forest.html',
  styleUrl: './forest.css'
})
export class Forest {

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
