import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PrivateModule } from './private/private.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'signup', component: SignupComponent
      }, {
        path: 'signin', component: SigninComponent
      },
    ]
  }, {
    path: 'private',
    loadChildren: () => PrivateModule,
    canLoad: [AuthGuard],
      data: {
        roles: []
      }
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
