import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeExerciseNameComponent } from './change-exercise-name.component';

describe('ChangeExerciseNameComponent', () => {
  let component: ChangeExerciseNameComponent;
  let fixture: ComponentFixture<ChangeExerciseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeExerciseNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeExerciseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
