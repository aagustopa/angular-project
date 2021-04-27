import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { UpdateActivityComponent } from './components/update-activity/update-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';


@NgModule({
  declarations: [
    UpdateActivityComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
