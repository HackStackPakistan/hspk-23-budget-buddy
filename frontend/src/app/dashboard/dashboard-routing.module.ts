import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
