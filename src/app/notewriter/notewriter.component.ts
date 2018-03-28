import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';

@Component({
    selector: 'app-notewriter',
    templateUrl: './notewriter.component.html',
    styleUrls: ['./notewriter.component.css']
})
export class NotewriterComponent implements OnInit {

    public editorValue: string = 'Hello world';
    constructor(private _patientService: PatientService) {

    }
    ngOnInit() {
    }

}

