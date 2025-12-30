import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chibi-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private router: Router) {}

  isCreditsOpen: boolean = false;

  toggleCredits() {
    this.isCreditsOpen = !this.isCreditsOpen;
  }

  startScene() {
    this.router.navigate(['/scene']);
  }
}
