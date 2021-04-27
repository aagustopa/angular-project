import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';

import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ListActivityComponent } from './components/list-activity/list-activity.component';

import { UpdateActivityComponent } from './components/update-activity/update-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';



@NgModule({
  declarations: [
    CreateActivityComponent,
    ListActivityComponent,
    UpdateActivityComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
