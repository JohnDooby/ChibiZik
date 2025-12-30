import { Component, Input } from '@angular/core';
import { Chibi } from '../../../../../core/models/chibi';
import { SceneService } from '../../../../../core/services/scene.service';
import { SceneChibi } from '../../../../../core/models/sceneChibi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'scene-chibi-item',
  imports: [CommonModule],
  templateUrl: './chibi-item.component.html',
  styleUrl: './chibi-item.component.scss',
})
export class ChibiItemComponent { 

  // Propriété d'entrée pour recevoir les données du chibi
  @Input() chibi: SceneChibi | null = null;

  /**
   * constructeur
   * @param sceneService 
   */
  constructor(public sceneService: SceneService) {}

  /**
   * Gestion du drag start
   * @param event 
   * @param chibi 
   */

  onDragStart(event: DragEvent,chibi:SceneChibi) {
    const el = event.target as HTMLElement;    
    const ghost = el.cloneNode(true) as HTMLElement;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    event.dataTransfer?.setData('text/plain', chibi.id);
    event.dataTransfer?.setData('application/json', JSON.stringify({ offsetX, offsetY }));
  
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.style.position = 'fixed'; // Fixed est plus fiable que absolute pour le ghosting
    ghost.style.top = '-1000px';
    ghost.style.left = '-1000px';
    ghost.style.zIndex = '1000';
    ghost.style.opacity = '1';
    ghost.style.pointerEvents = 'none';

    document.body.appendChild(ghost);
    event.dataTransfer?.setDragImage(ghost, offsetX, offsetY);

    setTimeout(() => {
        document.body.removeChild(ghost);
      }, 0);

    console.log("Drag started (MOVE) for chibi:", chibi);
  }

  removeChibi(event: MouseEvent) {
    event.stopPropagation();
    this.sceneService.removeChibi(this.chibi!);
  }

  muteChibi(event: MouseEvent) {
    this.sceneService.muteChibi(this.chibi!);
  }

  unmuteChibi(event:MouseEvent){
    this.sceneService.unmuteChibi(this.chibi!);
  }
}
