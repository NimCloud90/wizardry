import { Component, OnInit } from '@angular/core';
import { SaveFile, SavesService } from '../../services/saves-service';
import { Save } from './saves-file.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./saves.css']
})
export class Saves implements OnInit {
  playerId = '1'; // Hard-coded for now
  saves: SaveFile[] = [];
  loading = false;
  error: string | null = null;
  newSaveName = '';

  constructor(private savesService: SavesService) {}

  ngOnInit(): void {
    this.loadSaves();
  }

  // Load all saves
  loadSaves(): void {
    this.loading = true;
    this.error = null;

    this.savesService.loadProgress(this.playerId).subscribe({
      next: (res) => {
        this.saves = res.saves || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Error loading saves:', err);
        this.error = 'Failed to load saves.';
        this.loading = false;
      },
    });
  }

  // Create or overwrite save
  createSave(): void {
    if (!this.newSaveName.trim()) return;

    const payload = {
      name: this.newSaveName,
      data: { hp: 100, level: 1 } // replace with real game state
    };

    this.savesService.saveProgress(this.playerId, payload).subscribe({
      next: (res) => {
        console.log('✅ Save created:', res);
        this.newSaveName = '';
        this.loadSaves();
      },
      error: (err) => {
        console.error('❌ Error creating save:', err);
        this.error = 'Failed to create save.';
      },
    });
  }

  // Delete a save
  deleteSave(name: string): void {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    this.savesService.deleteSave(this.playerId, name).subscribe({
      next: (res) => {
        console.log('✅ Save deleted:', res);
        this.saves = res.saves || [];
      },
      error: (err) => {
        console.error('❌ Error deleting save:', err);
        this.error = 'Failed to delete save.';
      },
    });
  }
}