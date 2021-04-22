import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Redirect404Component } from './auth/components/redirect404/redirect404.component';

const routes: Routes = [
  { path: '**', component: Redirect404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
