import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLineDetailsComponent } from './schedule-line-details.component';

describe('ScheduleLineDetailsComponent', () => {
  let component: ScheduleLineDetailsComponent;
  let fixture: ComponentFixture<ScheduleLineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLineDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render addition details', () => {
    const fixture = TestBed.createComponent(ScheduleLineDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.details-container')?.textContent).toContain('Additional Details');
  });
});
