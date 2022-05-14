import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-line-container',
  templateUrl: './schedule-line-container.component.html',
  styleUrls: ['./schedule-line-container.component.scss']
})
export class ScheduleLineContainerComponent implements OnInit {
  public toggleValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onToggleChange(event: string) {
    this.toggleValue = event;
  }
}
