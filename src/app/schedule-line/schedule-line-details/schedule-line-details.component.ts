import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-line-details',
  templateUrl: './schedule-line-details.component.html',
  styleUrls: ['./schedule-line-details.component.scss']
})
export class ScheduleLineDetailsComponent implements OnInit {
  public panelOpenState = false;
  public additionalDetails = {
    productGradeDescription: '\nCorax N 339\nSpecification: 0123456789\nIssue: 003\nProducer: Orion Engineer',
    transportMethod: 'Road',
    incoTerms: 'CPT\n(Weißandt-Gölzau)',
    unloadingPoint: 'Amsterdam',
    shipToContact: 'Alan Dowl\nPhone: (770) 444-4444\nFax: (770) 444-4444'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
