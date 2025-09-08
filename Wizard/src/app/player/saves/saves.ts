// some.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service/api-service';
import { SavesService } from '../../services/saves-service';
import { HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.html',
  imports: [CommonModule, FormsModule],
})

export class Saves {
  saves: string[] = [];
  saveName: string = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProgress();
  }

  loadProgress() {
    this.isLoading = true;
    this.http.get<string[]>('/api/save').subscribe({
      next: (data) => {
        this.saves = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load saves', err);
        this.isLoading = false;
      }
    });
  }

  saveGame() {
    if (!this.saveName.trim()) return;

    this.http.post('/api/save', { name: this.saveName }).subscribe({
      next: () => {
        this.loadProgress();
        this.saveName = '';
      },
      error: (err) => console.error('Save failed', err)
    });
  }

  loadGame(name: string) {
    this.http.get(`/api/save/${name}`).subscribe({
      next: (data) => {
        console.log('Loaded save:', data);
        // Apply game state logic here
      },
      error: (err) => console.error('Load failed', err)
    });
  }

  deleteSave(name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    this.http.delete(`/api/save/${name}`).subscribe({
      next: () => {
        this.saves = this.saves.filter(s => s !== name); // Optimistic update
      },
      error: (err) => console.error('Delete failed', err)
    });
  }
}



