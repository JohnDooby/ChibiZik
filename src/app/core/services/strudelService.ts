import { EventEmitter, Injectable } from '@angular/core';
import { initStrudel, evaluate, hush, samples, getAudioContext,getSampleMap } from '@strudel/web';

@Injectable({ providedIn: 'root' })
export class StrudelService {
  private isInitialized = false;

  async boot(nomsDesSamples: string[]) {
    if (this.isInitialized) return;
    try {
      await initStrudel();

      console.log('⏳ Préchargement des sons...');

      const loader = samples('github:tidalcycles/dirt-samples');

      await new Promise(resolve => setTimeout(resolve, 500));

      
      const codePrecharge = `s("${nomsDesSamples.join(' ')}").gain(0)`;
      await evaluate(codePrecharge);

      await new Promise(resolve => setTimeout(resolve, 2000));
      hush();     

      this.isInitialized = true;
      console.log('✅ Service prêt');
    } catch (err) {
      console.error('❌ Erreur boot:', err);
    }
  }

  play(code: string) {
    if (!this.isInitialized ) return;
    
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') { ctx.resume(); }
    
    // On passe l'analyseur dans l'objet de configuration
    // Strudel va alors l'utiliser comme Master Output
    evaluate(code);
  }

  stop(){
    hush();
  }
}