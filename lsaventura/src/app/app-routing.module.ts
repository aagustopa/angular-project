import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateActivityComponent } from './activities/components/create-activity/create-activity.component';
import { ListActivityComponent } from './activities/components/list-activity/list-activity.component';
import { DeleteActivityComponent } from './activities/components/delete-activity/delete-activity.component';
import { UpdateActivityComponent } from './activities/components/update-activity/update-activity.component';

import { Redirect404Component } from '../app/redirect404/redirect404.component';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './auth/components/login-user/login-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'create', component: CreateActivityComponent },
  { path: 'list', component: ListActivityComponent },
  { path: 'delete', component: DeleteActivityComponent },
  { path: 'update/:id', component: UpdateActivityComponent },
  { path: 'login', component: LoginUserComponent },
  { path: '**', component: Redirect404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
