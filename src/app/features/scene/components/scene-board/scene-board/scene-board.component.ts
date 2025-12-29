import { Component, OnInit } from '@angular/core';
import { Chibi } from '../../../../../core/models/chibi';
import { ChibiItemComponent } from "../chibi-item/chibi-item.component";
import { CommonModule } from '@angular/common';
import { SceneService } from '../../../../../core/services/scene.service';
import { CatalogService } from '../../../../../core/services/catalog.service';

@Component({
  selector: 'app-scene-board',
  imports: [ChibiItemComponent,CommonModule],
  templateUrl: './scene-board.component.html',
  styleUrl: './scene-board.component.scss',
})
export class SceneBoardComponent implements OnInit {

  // Liste des chibis disposés sur le board
  chibis : Chibi[] = [];

  /**
   * Constructeur du composant
   * @param sceneService 
   */
  constructor(public sceneService: SceneService,private catalogService:CatalogService) {}

  /*
    * Initialisation du composant
  */
  ngOnInit(): void {
    
  }

  /**
   * Gestion du drag over
   * @param event 
   */
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  /**
   * 
   * @param event 
   * @returns 
   */
  onDrop(event: DragEvent) {
    event.preventDefault();
    const chibiId = event.dataTransfer?.getData('text/plain');
    const offsetData = event.dataTransfer?.getData('application/json');
    const { offsetX, offsetY } = offsetData ? JSON.parse(offsetData) : { offsetX: 0, offsetY: 0 };

    if (!chibiId) return;

   const chibi = this.sceneService.chibisOnScene.find(c => c.id === chibiId)
               ?? this.catalogService.getChibis().find(c => c.id === chibiId);

    if (!chibi) return;

    if (!this.sceneService.chibisOnScene.includes(chibi)) {
      this.sceneService.addChibi(chibi);
    } 

    const sceneRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - sceneRect.left - offsetX;
    const y = event.clientY - sceneRect.top - offsetY;
    this.sceneService.setChibiPosition(chibi, x, y);
  }
}
