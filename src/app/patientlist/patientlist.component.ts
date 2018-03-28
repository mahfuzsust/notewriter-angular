import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
    private patients : any = [{name: "Patient 1", content: "Patient 1"}, {name: "Patient 2", content: "Patient 2"}];
    private selectPatient(patient) {
        console.log(patient);
    }
  constructor() { }

  ngOnInit() {
  }


}
