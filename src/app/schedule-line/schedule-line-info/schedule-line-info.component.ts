import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-line-info',
  templateUrl: './schedule-line-info.component.html',
  styleUrls: ['./schedule-line-info.component.scss']
})
export class ScheduleLineInfoComponent implements OnInit {
  @Input() toggleValue: string = '';
  public shipDateForm: FormGroup;
  public minDate: Date = new Date();
  public leftInfo = {
    description: 'Table Salt, 100KG Tanks',
    shipTo: 'Amsterdam\n1234 Tulip Lane \nLudwigshafen DE 12346',
    supplierProductId: '12341723661',
    UPCNumber: '121238723001',
    contractNumber: '23081090910'
  };
  public rightInfo = {
    quantity: {
      ordered: '21,000 KGM',
      confirmed: '21,000 KGM'
    },
    expectedArrivalDate: {
      requested: '06-28-2018',
      confirmed: '06-28-2018'
    },
    price: {
      requested: '80 USD / 2 KGM',
      confirmed: '80 USD / 2 KGM'
    }
  };
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.shipDateForm = this.formBuilder.group({
      shipDate: new FormControl('', Validators.required),
    });
  }
}
