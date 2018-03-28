import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';

@Component({
    selector: 'app-patientlist',
    templateUrl: './patientlist.component.html',
    styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
    private patients = [];
    private counter = 1;
    private selectPatient(patient) {
        console.log(patient);
    }
    constructor(private _patientService: PatientService) { }

    ngOnInit() {
        this._patientService.patient.subscribe(res => this.patients = res);
        this._patientService.changePatientList(this.patients);
    }
    addPatient() {
        this.patients.push({ name: "Patient " + this.counter, content: "Patient " + this.counter++ });
        this._patientService.changePatientList(this.patients);
    }

}
