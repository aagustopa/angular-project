import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
<<<<<<< HEAD
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ListActivityComponent } from './components/list-activity/list-activity.component';
=======
import { UpdateActivityComponent } from './components/update-activity/update-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';
>>>>>>> dev2


@NgModule({
  declarations: [
<<<<<<< HEAD
    CreateActivityComponent,
    ListActivityComponent
=======
    UpdateActivityComponent,
    DeleteActivityComponent
>>>>>>> dev2
  ],
  imports: [
    CommonModule,
    FormsModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
