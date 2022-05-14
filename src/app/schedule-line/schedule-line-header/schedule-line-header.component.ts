import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToggleTypes } from '../schedule-line.types';

@Component({
  selector: 'app-schedule-line-header',
  templateUrl: './schedule-line-header.component.html',
  styleUrls: ['./schedule-line-header.component.scss']
})
export class ScheduleLineHeaderComponent implements OnInit {
  @Output() onToggleChange = new EventEmitter<string>();
  public toggleTypes = ToggleTypes;
  public lineData = {
    lineId: 10,
    itemName: 'NaCl (Sodium Chloride)'
  };
  constructor() { }

  ngOnInit(): void {
  }

  onValChange(event: string) {
    this.onToggleChange.emit(event);
  }

}