import { Injectable } from '@angular/core';
import { Chibi } from '../models/chibi';
import { StrudelService } from './strudel.service';

@Injectable({
  providedIn: 'root',
})
export class SceneService {
  // Liste des chibis actuellement sur la scène
  chibisOnScene: Chibi[] = [];

  // Chibi actuellement en cours de drag
  draggedChibi?: Chibi;

  // État de la lecture de la scène
  isPlaying = false;

  // Positions des chibis dans la scène
  private chibiPositions = new Map<string, { x: number; y: number }>();

  /**
   * Injecte les dépendances nécessaires
   * @param strudelService 
   */
  constructor(private strudelService: StrudelService) {}

  // ----------- Gestion de la scène -----------
  /**
   * Permet d'ajouter un chibi à la scène
   */
  addChibi(chibi: Chibi) {
    if (!this.chibisOnScene.includes(chibi)) {
      this.chibisOnScene.push(chibi);
      if (this.isPlaying) 
        this.playChibis();
    }
  }

  /**
   * Permet de retirer un chibi de la scène
   */
  removeChibi(chibi: Chibi) {
    this.chibisOnScene = this.chibisOnScene.filter(c => c !== chibi);
    if (this.isPlaying) 
      this.playChibis();
  }

  /**
   * Permet de vider la scène
   */
  clearScene() {
    this.chibisOnScene = [];
    this.strudelService.stop();
    this.isPlaying = false;
  }

  // ----------- Gestion de la lecture -----------
  /**
   * Démarre la lecture de la scène
   */
  startScene() {
    if (!this.strudelService.initialized) {
      this.strudelService.initialize();
    }

    this.isPlaying = true;
    this.playChibis();
  }

  /**
   * Met en pause la lecture de la scène
   */
  pauseScene() {
    this.isPlaying = false;
    this.strudelService.stop();
  }

  /**
   * Permet d'obtenir le code Strudel combiné de tous les chibis dans la scène
   */
  getCombinedCode(): string {
    if (this.chibisOnScene.length === 0) 
      return '';
    
    const codes = this.chibisOnScene.map(c => c.code);
    
    console.log("Combined codes:", codes);

    return `stack(${codes.join(',')})`;
  }

  //----------- Gestion pour position / drag&drop -----------
  /**
   * Met à jour la position d'un chibi dans la scène
   * @param chibi Chibi à déplacer
   * @param x La nouvelle position X
   * @param y La nouvelle position Y
   */
  setChibiPosition(chibi: Chibi, x: number, y: number) {
    this.chibiPositions.set(chibi.id, { x, y });
  }

  /**
   * Permet d'obtenir la position d'un chibi dans la scène
   * @param chibi Chibi dont on veut la position
   */
  getChibiPosition(chibi: Chibi): { x: number; y: number } {
    return this.chibiPositions.get(chibi.id) || { x: 0, y: 0 };
  }

  //----------- Méthodes privées -----------
  /**
   * Joue le code Strudel combiné des chibis dans la scène
   */
  private playChibis() {
    const code = this.getCombinedCode();

    console.log("Playing combined code:", code);

    if (code) 
      this.strudelService.play(code);
  }
}