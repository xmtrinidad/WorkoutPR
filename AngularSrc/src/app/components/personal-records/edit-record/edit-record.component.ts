import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../models/Exercise";
import {PersonalRecordService} from "../../../services/personal-record.service";

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(public prService: PersonalRecordService) { }

  ngOnInit() {
  }

  onExerciseEditSubmit() {
    this.prService.updateRecords(this.exercise);
  }

}
