import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOptionsComponent } from './exercise-options.component';

describe('ExerciseOptionsComponent', () => {
  let component: ExerciseOptionsComponent;
  let fixture: ComponentFixture<ExerciseOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
