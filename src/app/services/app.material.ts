import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        HttpClientModule,
        LayoutModule,
        MatTooltipModule,
        FlexLayoutModule,
        MatSnackBarModule 
    ],
    exports:[
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        HttpClientModule,
        LayoutModule,
        MatTooltipModule,
        FlexLayoutModule,
        MatSnackBarModule 
    ]
    
})

export class AppMaterial { }