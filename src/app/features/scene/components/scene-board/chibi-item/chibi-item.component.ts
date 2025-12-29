import { Component, Input } from '@angular/core';
import { Chibi } from '../../../../../core/models/chibi';

@Component({
  selector: 'app-chibi-item',
  imports: [],
  templateUrl: './chibi-item.component.html',
  styleUrl: './chibi-item.component.scss',
})
export class ChibiItemComponent { 

  // Propriété d'entrée pour recevoir les données du chibi
  @Input() chibi: Chibi | null = null;
}
