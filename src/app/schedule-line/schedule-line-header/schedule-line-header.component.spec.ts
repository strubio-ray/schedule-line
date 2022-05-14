import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ToggleTypes } from '../schedule-line.types';

import { ScheduleLineHeaderComponent } from './schedule-line-header.component';

describe('ScheduleLineHeaderComponent', () => {
  let component: ScheduleLineHeaderComponent;
  let fixture: ComponentFixture<ScheduleLineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLineHeaderComponent ],
      imports: [ PipesModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct formatted header info', () => {
    const fixture = TestBed.createComponent(ScheduleLineHeaderComponent);
    const component = fixture.componentInstance;
    const mockLineData = {
      lineId: 10,
      itemName: 'NaCl (Sodium Chloride)'
    };
    component.lineData = mockLineData;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.left-elements')?.textContent).toContain('0010');
    expect(compiled.querySelector('.left-elements')?.textContent).toContain('NaCl (Sodium Chloride)');
  });
});
