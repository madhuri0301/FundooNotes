import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import { NotesComponent } from './Components/notes/notes.component';




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
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatListModule
    
  ],
  
  providers: [ ],
    bootstrap: [AppComponent],
    
   
})
export class AppModule { }
