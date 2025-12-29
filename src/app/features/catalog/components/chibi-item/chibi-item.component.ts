import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chibi } from '../../../../core/models/chibi';

@Component({
  selector: 'app-chibi-item',
  imports: [],
  templateUrl: './chibi-item.component.html',
  styleUrl: './chibi-item.component.scss',
})
export class ChibiItemComponent {
  // Propriété d'entrée pour recevoir les données du chibi
  @Input() chibi!: Chibi;
  // Propriété d'entrée pour indiquer si le chibi est déjà sur la scène
  @Input() isDisabled = false; // pour désactiver le drag si déjà sur la scène
  // Événement émis lorsque le drag commence
  @Output() dragStart = new EventEmitter<Chibi>();

  /**
   * Gestion du drag start
   * @param event 
   * @returns 
   */
  onDragStart(event: DragEvent) {
    console.log("Drag started for chibi:", this.chibi);
    if (this.isDisabled) {
      event.preventDefault();
      return;
    }
   
    event.stopPropagation();

    // Calcul de l'offset par rapport au coin du chibi
    const el = event.target as HTMLElement;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    event.dataTransfer?.setData('text/plain', this.chibi.id);
    event.dataTransfer?.setData('application/json', JSON.stringify({ offsetX, offsetY }));
    this.dragStart.emit(this.chibi);

    
    console.log("DataTransfer set for chibi:", this.chibi.id, { offsetX, offsetY });
  }
}
