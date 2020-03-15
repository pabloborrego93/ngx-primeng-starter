import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { PrivateRoutingModule } from './private-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PrivateMainComponent } from './private-main/private-main.component';


@NgModule({
  declarations: [
    PrivateHomeComponent,
    UserProfileComponent,
    Test1Component,
    Test2Component,
    PrivateMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
