import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { ForbiddenComponent } from '../shared/forbidden/forbidden.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PrivateMainComponent } from './private-main/private-main.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateMainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      roles: []
    },
    children: [
      {
        path: '',
        component: PrivateHomeComponent,
        data: {
          roles: []
        }
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        data: {
          roles: []
        }
      }, {
        path: 'test1',
        component: Test1Component,
        data: {
          roles: ['ROLE_TEST1']
        }
      }, {
        path: 'test2',
        component: Test2Component,
        data: {
          roles: ['ROLE_TEST2']
        }
      }, {
        path: 'error-404', component: NotFoundComponent
      }, {
        path: 'error-403', component: ForbiddenComponent
      }, {
        path: '**', redirectTo: '/private/error-404', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
