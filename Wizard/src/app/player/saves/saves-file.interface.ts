import { SavesService } from "../../services/saves-service";

export class SaveFile {
  constructor(private savesService: SavesService) {}

  saveGameProgress() {
    const progress = { level: 5, character: 'Wizard' };  // Example progress
    this.savesService.saveProgress('1234', progress).subscribe((response: any) => {
      console.log(response);
    });
  }

  loadGameProgress() {
    this.savesService.loadProgress('1234').subscribe((response: any) => {
      console.log(response);
    });
  }
}
