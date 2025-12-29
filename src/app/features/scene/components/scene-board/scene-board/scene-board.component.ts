import { Component, OnInit } from '@angular/core';
import { Chibi } from '../../../../../core/models/chibi';
import { ChibiItemComponent } from "../chibi-item/chibi-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scene-board',
  imports: [ChibiItemComponent,CommonModule],
  templateUrl: './scene-board.component.html',
  styleUrl: './scene-board.component.scss',
})
export class SceneBoardComponent implements OnInit {

  // Liste des chibis disposés sur le board
  chibis : Chibi[] = [];

  /*
    * Initialisation du composant
  */
  ngOnInit(): void {
    
  }
}
