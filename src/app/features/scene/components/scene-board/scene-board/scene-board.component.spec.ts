import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneBoardComponent } from './scene-board.component';

describe('SceneBoardComponent', () => {
  let component: SceneBoardComponent;
  let fixture: ComponentFixture<SceneBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceneBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceneBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
