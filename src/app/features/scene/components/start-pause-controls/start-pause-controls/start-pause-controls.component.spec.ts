import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseControlsComponent } from './start-pause-controls.component';

describe('StartPauseControlsComponent', () => {
  let component: StartPauseControlsComponent;
  let fixture: ComponentFixture<StartPauseControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartPauseControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPauseControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
