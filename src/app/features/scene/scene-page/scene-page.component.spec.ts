import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenePageComponent } from './scene-page.component';

describe('ScenePageComponent', () => {
  let component: ScenePageComponent;
  let fixture: ComponentFixture<ScenePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
