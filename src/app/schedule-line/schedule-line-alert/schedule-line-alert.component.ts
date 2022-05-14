import { Component, Input, OnInit } from '@angular/core';
import { ToggleTypes } from '../schedule-line.types';

@Component({
  selector: 'app-schedule-line-alert',
  templateUrl: './schedule-line-alert.component.html',
  styleUrls: ['./schedule-line-alert.component.scss']
})
export class ScheduleLineAlertComponent implements OnInit {
  @Input() toggleValue: string = '';
  public toggleTypes = ToggleTypes;
  constructor() { }

  ngOnInit(): void {
  }

}
