import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SentComponent } from './sent/sent.component';
import { RecievedComponent } from './recieved/recieved.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SentComponent,
    RecievedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
