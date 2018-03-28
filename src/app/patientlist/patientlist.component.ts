import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';

@Component({
    selector: 'app-patientlist',
    templateUrl: './patientlist.component.html',
    styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
    patients = {};
    selectedPatient = {};
    selectedDate: string;
    dates = [];
    
    constructor(private _patientService: PatientService) { }

    ngOnInit() {
        this.patients[this.selectedDate] = [];
        this._patientService.patient.subscribe(res => this.patients = res);
        this._patientService.changePatientList(this.patients);

        this._patientService.selectedPatientObjervable.subscribe(res => this.selectedPatient);
        this._patientService.changeSelectedPatient(this.selectedPatient);

        this.setDates();
    }
    addPatient() {
        if(!this.patients.hasOwnProperty(this.selectedDate)) {
            this.patients[this.selectedDate] = [];
        }
        let counter = this.patients[this.selectedDate].length + 1;

        this.selectedPatient = { name: "Patient " + counter, content: "", selected: true };
        
        this.patients[this.selectedDate].push(this.selectedPatient);
        this._patientService.changePatientList(this.patients);
        this._patientService.changeSelectedPatient(this.selectedPatient);
    }
    selectPatient(patient) {
        this.selectedPatient = patient;
        this._patientService.changeSelectedPatient(patient);
    }

    private addDays(date: Date, days: number) {
        date.setDate(date.getDate() + days);
        return date;
    }

    setDates() {
        this.selectedDate = new Date().toDateString();
        this.dates.push(this.addDays(new Date(), -2).toDateString());
        this.dates.push(this.addDays(new Date(), -1).toDateString());
        this.dates.push(new Date().toDateString());
        this.dates.push(this.addDays(new Date(), 1).toDateString());
        this.dates.push(this.addDays(new Date(), 2).toDateString());
    }
    changeDate() {
        if(!this.patients.hasOwnProperty(this.selectedDate)) {
            this.patients[this.selectedDate] = [];
            this.selectedPatient = {};
        } else {
            this.selectedPatient = this.patients[this.selectedDate][0];
        }
        this._patientService.changeSelectedPatient(this.selectedPatient);
    }
}
