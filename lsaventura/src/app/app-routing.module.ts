import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateActivityComponent } from './activities/components/create-activity/create-activity.component';
import { ListActivityComponent } from './activities/components/list-activity/list-activity.component';
import { DeleteActivityComponent } from './activities/components/delete-activity/delete-activity.component';
import { UpdateActivityComponent } from './activities/components/update-activity/update-activity.component';

import { Redirect404Component } from '../app/redirect404/redirect404.component';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './auth/components/login-user/login-user.component';
import { AuthGuardGuard } from './auth/guards/auth-guard.guard';
import { UpdateGuardGuard } from './activities/guards/update-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '', component: AppComponent },
  { path: 'create', component: CreateActivityComponent, canActivate: [AuthGuardGuard] },
  { path: 'list', component: ListActivityComponent, canActivate: [AuthGuardGuard] },
  { path: 'delete', component: DeleteActivityComponent, canActivate: [AuthGuardGuard] },
  { path: 'update/:id', component: UpdateActivityComponent, canActivate: [AuthGuardGuard], canDeactivate: [UpdateGuardGuard] },
  { path: 'login', component: LoginUserComponent },
  { path: '**', component: Redirect404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
