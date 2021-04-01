import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from '../admin-module/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
