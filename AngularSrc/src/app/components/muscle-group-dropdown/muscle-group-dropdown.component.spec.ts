import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupDropdownComponent } from './muscle-group-dropdown.component';

describe('MuscleGroupDropdownComponent', () => {
  let component: MuscleGroupDropdownComponent;
  let fixture: ComponentFixture<MuscleGroupDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleGroupDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGroupDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
