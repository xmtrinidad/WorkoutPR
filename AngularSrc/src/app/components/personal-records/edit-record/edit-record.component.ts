import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../models/Exercise";
import {PersonalRecordService} from "../../../services/personal-record.service";
import {ValidateService} from "../../../services/validate.service";

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(
    private validateService: ValidateService,
    public prService: PersonalRecordService) { }

  ngOnInit() {
  }

  onExerciseEditSubmit() {
    if (!this.validateService.validateEmptyInputFields(this.exercise.prs)) {
      return;
    }
    this.prService.updatePrs(this.exercise);
  }

  onDeleteIconClick(pr) {
    this.prService.deletePr(this.exercise, pr);
  }

  onCancelEdit() {
    this.prService.editIndex = undefined;
  }

}
