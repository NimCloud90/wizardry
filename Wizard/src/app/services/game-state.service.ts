import { Injectable } from '@angular/core';
import { signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  // Signal to track the current location in the game
  currentLocation = signal<string>('village');

  // Signal to track the player's inventory
  inventory = signal<string[]>([]);

  // Method to update the current location
  updateLocation(newLocation: string) {
    this.currentLocation.set(newLocation);
  }

  // Method to add an item to the inventory
  addItem(item: string) {
    this.inventory.update((items) => [...items, item]);
  }
}