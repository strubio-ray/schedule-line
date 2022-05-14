import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { ContainerFooterComponent } from './container-footer/container-footer.component';
import {MatButtonModule} from '@angular/material/button';
import { ScheduleLineContainerComponent } from './schedule-line/schedule-line-container/schedule-line-container.component';
import { ScheduleLineHeaderComponent } from './schedule-line/schedule-line-header/schedule-line-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ScheduleLineInfoComponent } from './schedule-line/schedule-line-info/schedule-line-info.component';
import { ScheduleLineAlertComponent } from './schedule-line/schedule-line-alert/schedule-line-alert.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ScheduleLineDetailsComponent } from './schedule-line/schedule-line-details/schedule-line-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerFooterComponent,
    ScheduleLineContainerComponent,
    ScheduleLineHeaderComponent,
    ScheduleLineInfoComponent,
    ScheduleLineAlertComponent,
    ScheduleLineDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
