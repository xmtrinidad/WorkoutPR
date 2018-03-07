import {Component, Input, OnInit} from '@angular/core';
import {PersonalRecord} from "../../../models/PersonalRecord";
import {PersonalRecordService} from "../../../services/personal-record.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Exercise} from "../../../models/Exercise";

@Component({
  selector: 'app-new-pr-modal',
  templateUrl: './new-pr-modal.component.html',
  styleUrls: ['./new-pr-modal.component.css']
})
export class NewPrModalComponent implements OnInit {
  @Input() exercise: Exercise;
  newReps: number;
  newMax: number;

  constructor(
    public activeModal: NgbActiveModal,
    private prService: PersonalRecordService) { }

  ngOnInit() {
  }
  // Add new pr to exercise
  onNewRecordSubmit() {
    const pr: PersonalRecord = {
      reps: this.newReps,
      max: this.newMax
    };
    this.prService.addPr(this.exercise, pr);
  }


}
