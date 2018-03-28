import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notewriter',
  templateUrl: './notewriter.component.html',
  styleUrls: ['./notewriter.component.css']
})
export class NotewriterComponent implements OnInit {

  public editorValue: string = 'Hello world';
  constructor() { }

  ngOnInit() {
  }

}

