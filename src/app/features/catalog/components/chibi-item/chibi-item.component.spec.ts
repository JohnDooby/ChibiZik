import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChibiItemComponent } from './chibi-item.component';

describe('ChibiItemComponent', () => {
  let component: ChibiItemComponent;
  let fixture: ComponentFixture<ChibiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChibiItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChibiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
