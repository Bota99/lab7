import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]


})
export class AdminModuleModule { }
