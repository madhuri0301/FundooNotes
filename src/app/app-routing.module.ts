import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { AuthenticationGuard } from './Components/authentication.guard';
import { ReminderComponent } from './Components/reminder/reminder.component';
import { LabelsComponent } from './Components/labels/labels.component';
import { TrashComponent } from './Components/trash/trash.component';
import { HeaderComponent } from './Components/header/header.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'resetpassword/:token', component: ResetPasswordComponent},
  {
    path: 'home', component: HeaderComponent,canActivate:[AuthenticationGuard],
    children: [
  
      { path: '', redirectTo: "notes", pathMatch: "full" },
      { path: 'notes', component: GetNotesComponent },
      { path: 'reminder', component: ReminderComponent},
      {path : 'labels', component: LabelsComponent},
      // {path: 'archive', component: ArchiveComponent},
      {path: 'trash',component: TrashComponent}

    ]
  }];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
