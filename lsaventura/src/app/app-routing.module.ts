import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteActivityComponent } from './activities/components/delete-activity/delete-activity.component';
import { UpdateActivityComponent } from './activities/components/update-activity/update-activity.component';

import { Redirect404Component } from './redirect404/redirect404.component';

const routes: Routes = [
  { path: 'delete', component: DeleteActivityComponent },
  { path: 'update', component: UpdateActivityComponent },
  { path: '**', component: Redirect404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
