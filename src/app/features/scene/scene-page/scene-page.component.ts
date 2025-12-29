import { Component } from '@angular/core';
import { SceneBoardComponent } from "../components/scene-board/scene-board/scene-board.component";
import { StartPauseControlsComponent } from "../components/start-pause-controls/start-pause-controls/start-pause-controls.component";

@Component({
  selector: 'app-scene-page',
  imports: [SceneBoardComponent, StartPauseControlsComponent],
  templateUrl: './scene-page.component.html',
  styleUrl: './scene-page.component.scss',
})
export class ScenePageComponent {

}
