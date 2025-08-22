// some.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service/api-service';
import { SavesService } from '../../services/saves-service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.html',
})

export class Saves {
[x: string]: any;
  data: any;

  constructor(private apiService: ApiService) {
    this.data = this.apiService.loadSave()
  }

  // ngOnInit(): void {
  //   this.apiService.getData().subscribe({
  //     next: (response) => {
  //       this.data = response;
  //       console.log('Data:', this.data);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching data:', err);
  //     }
  //   });
  // }

  // saveMultipleGames() {
  //   const saveDataList = [
  //     { id: '1234', progress: { level: 5, character: 'Wizard' } },
  //     { id: '5678', progress: { level: 3, character: 'Warrior' } },
  //     { id: '9012', progress: { level: 7, character: 'Rogue' } }
  //   ];

  //   for (const saveData of saveDataList) {
  //     this.savesService.saveProgress(saveData.id, saveData.progress).subscribe({
  //       next: (response) => console.log(`Saved ${saveData.id}:`, response),
  //       error: (err) => console.error(`Failed to save ${saveData.id}:`, err)
  //     });
  //   }
  // }

  // // Load multiple game progress entries
  // loadMultipleGames() {
  //   const saveIds = ['1234', '5678', '9012'];

  //   for (const id of saveIds) {
  //     this.savesService.loadProgress(id).subscribe({
  //       next: (response) => console.log(`Loaded ${id}:`, response),
  //       error: (err) => console.error(`Failed to load ${id}:`, err)
  //     });
  //   }
  // }

  
}

