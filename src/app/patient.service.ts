import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PatientService {
	private patients = new BehaviorSubject<any>({});
	patientObjervable = this.patients.asObservable();

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
