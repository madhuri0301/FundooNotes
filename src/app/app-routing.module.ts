import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { AuthenticationGuard } from './Components/authentication.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'resetpassword/:token', component: ResetPasswordComponent},


  {
    path: 'home', component: DashboardComponent,canActivate:[AuthenticationGuard],
    children: [
  
      { path: '', redirectTo: "notes", pathMatch: "full" },
      { path: 'notes', component: GetNotesComponent },
    ]
  }];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
