import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PatientService {
	private messageSource = new BehaviorSubject<string>("default message");
	currentMessage = this.messageSource.asObservable();

	private patients = new BehaviorSubject<any>({});
	patient = this.patients.asObservable();

	private selectedPatient = new BehaviorSubject<any>({});
	selectedPatientObjervable = this.selectedPatient.asObservable();
	constructor() { }

	changePatientList(patients) {
		this.patients.next(patients);
	}

	changeSelectedPatient(patient) {
		this.selectedPatient.next(patient);
	}
}
