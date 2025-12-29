import { Component, OnInit } from '@angular/core';
import { Chibi } from '../../../core/models/chibi';
import { CHIBI_CATALOG } from '../../../data/catalog';
import { CommonModule } from '@angular/common';
import { ChibiItemComponent } from "../components/chibi-item/chibi-item.component";

@Component({
  selector: 'app-catalog-list',
  imports: [CommonModule, ChibiItemComponent],
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.scss',
})
export class CatalogListComponent implements OnInit {
  // Liste des chibis disponibles dans le catalogue
  chibis: Chibi[] = [];

  /**
   * Initialisation du composant
   */
  ngOnInit(): void {

  }
}
