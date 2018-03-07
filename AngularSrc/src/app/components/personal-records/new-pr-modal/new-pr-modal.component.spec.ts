import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrModalComponent } from './new-pr-modal.component';

describe('NewPrModalComponent', () => {
  let component: NewPrModalComponent;
  let fixture: ComponentFixture<NewPrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
