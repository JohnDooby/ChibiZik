import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chibi } from '../../../core/models/chibi';
import { CommonModule } from '@angular/common';
import { ChibiItemComponent } from "../components/chibi-item/chibi-item.component";
import { CatalogService } from '../../../core/services/catalog.service';
import { SceneService } from '../../../core/services/scene.service';

@Component({
  selector: 'app-catalog-list',
  imports: [CommonModule, ChibiItemComponent],
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.scss',
})
export class CatalogListComponent implements OnInit {
  // Liste des chibis disponibles dans le catalogue
  chibis: Chibi[] = [];

  // Référence à l'élément du catalogue dans le template
  @ViewChild('catalog') catalogRef!: ElementRef<HTMLDivElement>;

  /**
   * Constructeur du composant
   */
  constructor(private catalogService: CatalogService, public sceneService: SceneService) { }

  /**
   * Initialisation du composant
   */
  ngOnInit() {
    this.chibis = this.catalogService.getChibis();
  }

  /**
   * Fait défiler le catalogue vers la droite
   */
  scrollRight() {
    this.catalogRef.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
  }
  /**
   * Fait défiler le catalogue vers la gauche
   */
  scrollLeft() {
    this.catalogRef.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
  }

  /**
   * permet de savoir si un chibi est désactivé (déjà sur la scène)
   * @param chibi 
   * @returns 
   */
  isChibiDisabled(chibi: Chibi): boolean {
    return this.sceneService.chibisOnScene.some(c => c.id === chibi.id);
  }
}
