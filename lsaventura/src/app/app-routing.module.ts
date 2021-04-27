import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActivityComponent } from './activities/components/create-activity/create-activity.component';
import { ListActivityComponent } from './activities/components/list-activity/list-activity.component';

<<<<<<< HEAD
import { Redirect404Component } from './auth/components/redirect404/redirect404.component';

const routes: Routes = [
  { path: '**', component: Redirect404Component },
=======
const routes: Routes = [
  {path: 'create', component:CreateActivityComponent},
  {path: 'list', component:ListActivityComponent}
>>>>>>> dev1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
