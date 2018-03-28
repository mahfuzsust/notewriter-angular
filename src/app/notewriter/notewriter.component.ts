import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';

@Component({
    selector: 'app-notewriter',
    templateUrl: './notewriter.component.html',
    styleUrls: ['./notewriter.component.css']
})
export class NotewriterComponent implements OnInit {
    selectedPatient = {name: "", content: ""};
    constructor(private _patientService: PatientService) {

    }
    ngOnInit() {
        this._patientService.selectedPatientObjervable.subscribe(res => this.selectedPatient = res);
    }

    changeName() {
        this._patientService.changeSelectedPatient(this.selectedPatient);
    }
    changeContent() {
        this._patientService.changeSelectedPatient(this.selectedPatient);
    }
}

