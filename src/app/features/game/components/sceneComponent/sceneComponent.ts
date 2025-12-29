import { Component, OnInit } from '@angular/core';
import { StrudelService } from '../../../../core/services/strudelService';
import { CHIBI_CATALOG } from '../../../../data/catalog';
import { Chibi } from '../../../../core/models/chibi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sceneComponent.html',
  styleUrl: './sceneComponent.scss',
})
export class SceneComponent implements OnInit {
  audioPret = false;
  catalogue = CHIBI_CATALOG;
  orchestre: Chibi[] = [];

  /**
   * Construteur
   */
  constructor(private strudelService:StrudelService)
  {  }

  async ngOnInit() {    
    await this.demarrerJeu();
  }

  async demarrerJeu() {
    const nomsSamples = this.catalogue.map(chibi => {
      const match = chibi.code.match(/s\(["']([^"/*\s]+)/);
      return match ? match[1] : null;
    }).filter(n => n !== null)
      .map(s => s.split(/[:(*]/)[0]) as string[];

    const samplesUniques = [...new Set(nomsSamples)];

    console.log('Samples détectés pour préchargement :', samplesUniques);

    await this.strudelService.boot(samplesUniques);
    this.audioPret = true;
  }

  toggleChibi(chibi: Chibi) {
    const index = this.orchestre.findIndex(c => c.id === chibi.id);
    
    if (index > -1) {
      this.orchestre.splice(index, 1); // Quitte l'orchestre
    } else {
      this.orchestre.push(chibi); // Rejoint l'orchestre
    }

    this.jouerOrchestre();
  }

  async jouerOrchestre() {
    if (this.orchestre.length === 0) {
      this.strudelService.stop();
      return;
    }

    // On combine les codes avec stack()
    // Exemple résultat : stack(s("bd*4"), s("hh*16"))
    const codeFinal = `stack(${this.orchestre.map(c => c.code).join(',')})`;
    
    this.strudelService.play(codeFinal);
  }


}
