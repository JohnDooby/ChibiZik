import { Injectable } from '@angular/core';
import { initStrudel, evaluate, hush, samples, getAudioContext } from '@strudel/web';
import { SAMPLE_MAP } from '../../../assets/sounds/Dirt-Samples-master/sample_map';

@Injectable({
  providedIn: 'root',
})
export class StrudelService {
  // Indique si le service a été initialisé
  private isInitialized = false;

  /** Initialise Strudel
   * @returns Promise<void>
   */
  initialize() {
    if (this.isInitialized) return;
    try {
      initStrudel();

      samples(SAMPLE_MAP);

      this.isInitialized = true;
    } catch (err) {
      console.error('Erreur boot:', err);
    }
  }

  get initialized(): boolean {
    return this.isInitialized;
  }

  /** Joue un code Strudel
   * @param code Le code Strudel à jouer
   */
  play(code: string) {
    if (!this.isInitialized ) return;
    
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') { ctx.resume(); }
    
    evaluate(code);
  }

  /** Arrête la lecture en cours */
  stop(){
    hush();
  }
  
}
