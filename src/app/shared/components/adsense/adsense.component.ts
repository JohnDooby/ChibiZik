import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-adsense',
  imports: [],
  templateUrl: './adsense.component.html',
  styleUrl: './adsense.component.scss',
})
export class AdsenseComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // On n'exécute le code que si on est dans un vrai navigateur
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Cette ligne prévient Google qu'un nouveau bloc d'annonce est prêt
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }
}
