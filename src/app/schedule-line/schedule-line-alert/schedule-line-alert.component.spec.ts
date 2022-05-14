import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleTypes } from '../schedule-line.types';

import { ScheduleLineAlertComponent } from './schedule-line-alert.component';

describe('ScheduleLineAlertComponent', () => {
  let component: ScheduleLineAlertComponent;
  let fixture: ComponentFixture<ScheduleLineAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLineAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLineAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render reject text when ToggleTypes.REJECT is selected', () => {
    const fixture = TestBed.createComponent(ScheduleLineAlertComponent);
    const component = fixture.componentInstance;
    component.toggleValue = ToggleTypes.REJECT;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div p')?.textContent).toContain('Buyer will receive your rejection');
  });

  it('should render change text when ToggleTypes.CHANGE is selected', () => {
    const fixture = TestBed.createComponent(ScheduleLineAlertComponent);
    const component = fixture.componentInstance;
    component.toggleValue = ToggleTypes.CHANGE;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div p')?.textContent).toContain('Buyer will receive your change request');
  });

  it('should render change text when ToggleTypes.ACCEPT is selected', () => {
    const fixture = TestBed.createComponent(ScheduleLineAlertComponent);
    const component = fixture.componentInstance;
    component.toggleValue = ToggleTypes.ACCEPT;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div p')?.textContent).toContain('Buyer will receive your order confirmation');
  });
});
