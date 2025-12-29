import { Component } from '@angular/core';
import { SceneService } from '../../../../../core/services/scene.service';

@Component({
  selector: 'app-start-pause-controls',
  imports: [],
  templateUrl: './start-pause-controls.component.html',
  styleUrl: './start-pause-controls.component.scss',
})
export class StartPauseControlsComponent {

  constructor(public sceneService: SceneService) { }
}
