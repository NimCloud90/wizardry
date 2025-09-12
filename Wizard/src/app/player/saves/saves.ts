import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavesService } from '../../services/saves-service';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.html',
  standalone: true, // use standalone component
  imports: [CommonModule, FormsModule],
})
export class Saves implements OnInit {
  playerId: any = {} // TODO: replace with actual player ID (e.g. from auth)
  saves: any[] = [];
  progress: any = {};
  saveName: string = '';
  isLoading = false;

  constructor(private http: HttpClient, private savesService: SavesService) {}

  ngOnInit() {
    this.fetchSaves();
  }

  saveGame() {
    const progress = { level: 1, score: 200 }; // replace with real game state
    this.savesService.saveProgress(this.playerId, { name: this.saveName, data: progress })
      .subscribe({
        next: () => {
          this.fetchSaves();
          this.saveName = '';
        },
        error: (err) => console.error('Save failed', err),
      });
  }

  loadGame(name: string) {
    this.savesService.loadProgress(this.playerId).subscribe({
      next: (res) => {
        console.log(`Loaded progress for ${name}:`, res);
        // TODO: filter res.progress by save name if multiple saves are supported
      },
      error: (err) => console.error('Load failed', err),
    });
  }

  deleteSave(name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    this.http.delete(`/api/saves/${name}`).subscribe({
      next: () => {
        this.saves = this.saves.filter(s => s.name !== name);
      },
      error: (err) => console.error('Delete failed', err),
    });
  }

  fetchSaves() {
    this.isLoading = true;
    this.savesService.loadProgress(this.playerId).subscribe({
      next: (res) => {
        this.saves = res.progress?.saves || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Fetch failed', err);
        this.isLoading = false;
      },
    });
  }
}
