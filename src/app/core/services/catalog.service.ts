import { Injectable } from '@angular/core';
import { Chibi } from '../models/chibi';
import { CHIBI_CATALOG } from '../../data/catalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  /**
   * Récupère la liste des chibis disponibles dans le catalogue 
   */
  getChibis() : Chibi[] {
    return CHIBI_CATALOG;
  }
}
