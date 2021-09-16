import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import { NotesComponent } from './Components/notes/notes.component';
import { ReminderComponent } from './Components/reminder/reminder.component';

import { DialogContentComponent } from './Components/dialog-content/dialog-content.component';
import { HeaderComponent } from './Components/header/header.component';
import { LabelsComponent } from './Components/labels/labels.component';
import { TrashComponent } from './Components/trash/trash.component';
import { IconsComponent } from './Components/icons/icons.component';
import { ColourpalletComponent } from './Components/colourpallet/colourpallet.component';
import { ArchiveComponent } from './Components/archive/archive.component';


import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppMaterial } from './services/app.material';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetNotesComponent,
    TakeNotesComponent,
    NotesComponent,
    ReminderComponent,
    DialogContentComponent,
    HeaderComponent,
    LabelsComponent,
    TrashComponent,
    IconsComponent,
    ColourpalletComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterial,
    
  ],
  
  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} }],
    bootstrap: [AppComponent],
    
   
})
export class AppModule { }
