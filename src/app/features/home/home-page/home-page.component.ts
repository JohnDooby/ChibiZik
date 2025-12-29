import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chibi-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private router: Router) {}

  startScene() {
    this.router.navigate(['/scene']);
  }
}
