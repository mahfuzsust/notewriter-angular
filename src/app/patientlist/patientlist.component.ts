import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';

@Component({
    selector: 'app-patientlist',
    templateUrl: './patientlist.component.html',
    styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
    patients = [];
    private counter = 1;
    selectedPatient = {};
    
    constructor(private _patientService: PatientService) { }

    ngOnInit() {
        this._patientService.patient.subscribe(res => this.patients = res);
        this._patientService.changePatientList(this.patients);

        this._patientService.selectedPatientObjervable.subscribe(res => this.selectedPatient);
        this._patientService.changeSelectedPatient(this.selectedPatient);
    }
    addPatient() {
        this.selectedPatient = { name: "Patient " + this.counter, content: "Patient " + this.counter++ };
        this.patients.push(this.selectedPatient);
        this._patientService.changePatientList(this.patients);
        this._patientService.changeSelectedPatient(this.selectedPatient);
    }
    selectPatient(patient) {
        this._patientService.changeSelectedPatient(patient);
    }

}
