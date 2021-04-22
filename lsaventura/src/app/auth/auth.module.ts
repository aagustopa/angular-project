import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { Redirect404Component } from './components/redirect404/redirect404.component';


@NgModule({
  declarations: [
    Redirect404Component
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
