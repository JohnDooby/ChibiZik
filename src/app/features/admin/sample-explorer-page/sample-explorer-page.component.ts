import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SAMPLE_MAP } from '../../../../assets/sounds/Dirt-Samples-master/sample_map';
import { StrudelService } from '../../../core/services/strudel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sample-explorer-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './sample-explorer-page.component.html',
  styleUrl: './sample-explorer-page.component.scss',
})
export class SampleExplorerPageComponent {
  samplesMap:any = SAMPLE_MAP;
  folderNames = Object.keys(SAMPLE_MAP).filter(key => key !== '_base');
  selectedFolder: string | null = null;
  isPlaying:boolean = false;

  searchTerm: string = '';

  testPattern: string = '';

  constructor(private strudel: StrudelService) {}

  selectFolder(folder: string) {
    this.selectedFolder = folder;
  }

  // Extrait juste le nom du fichier pour l'affichage
  getFileName(path: string): string {
    return path.split('/').pop() || path;
  }

  get filteredFolders() {
    return this.folderNames.filter(name => 
      name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  playSound(folder: string, index: number) {
    if(!this.strudel.initialized)
      this.strudel.initialize();

    if(!this.isPlaying) {
      // Joue le son instantanément via Strudel
      this.strudel.play(`s("${folder}:${index}")`);
      this.isPlaying = true;
    }
    else
    {
      this.strudel.stop();
      this.isPlaying = false;
    }
    
  }

  stopSound(){
    if(this.isPlaying)
      this.strudel.stop();

    this.isPlaying = false;
  }

  copyCode(folder: string, index: number) {
    const code = `s("${folder}:${index}")`;
    navigator.clipboard.writeText(code);
    // Optionnel: ajouter une petite notification "Copié !"
  }

  runPattern() {
    if(this.isPlaying)
      this.stopSound();
    
    this.strudel.play(this.testPattern);
    this.isPlaying = true;
  }

  stopPattern() {
    if(this.isPlaying)
      this.strudel.stop();

    this.isPlaying = false;
  }
}
