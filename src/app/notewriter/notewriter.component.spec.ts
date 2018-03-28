import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotewriterComponent } from './notewriter.component';

describe('NotewriterComponent', () => {
  let component: NotewriterComponent;
  let fixture: ComponentFixture<NotewriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotewriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
