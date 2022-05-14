import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleLineInfoComponent } from './schedule-line-info.component';

describe('ScheduleLineInfoComponent', () => {
  let component: ScheduleLineInfoComponent;
  let fixture: ComponentFixture<ScheduleLineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLineInfoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render left info section', () => {
    const fixture = TestBed.createComponent(ScheduleLineInfoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.left-info')?.textContent).toContain('Description:');
  });

  it('should render right info section', () => {
    const fixture = TestBed.createComponent(ScheduleLineInfoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.right-info')?.textContent).toContain('Quantity');
  });
});
