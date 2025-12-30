import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleExplorerPageComponent } from './sample-explorer-page.component';

describe('SampleExplorerPageComponent', () => {
  let component: SampleExplorerPageComponent;
  let fixture: ComponentFixture<SampleExplorerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleExplorerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleExplorerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
