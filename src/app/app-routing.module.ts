import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PrivateModule } from './private/private.module';
import { AuthGuard } from './security/auth.guard';
import { SignupComponent } from './public/signup/signup.component';
import { SigninComponent } from './public/signin/signin.component';
import { HomeComponent } from './home/home.component';


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
