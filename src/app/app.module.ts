import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { NotewriterComponent } from './notewriter/notewriter.component';
import { CKEditorModule } from 'ngx-ckeditor';
import {FormsModule} from '@angular/forms';

import {PatientService} from './patient.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientlistComponent,
    NotewriterComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
