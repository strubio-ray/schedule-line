import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLineContainerComponent } from './schedule-line-container.component';

describe('ScheduleLineContainerComponent', () => {
  let component: ScheduleLineContainerComponent;
  let fixture: ComponentFixture<ScheduleLineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLineContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
