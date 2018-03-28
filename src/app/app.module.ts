import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    FormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
