import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../models/Exercise";
import {PersonalRecordService} from "../../../services/personal-record.service";
import {ValidateService} from "../../../services/validate.service";

@Component({
  selector: 'app-change-exercise-name',
  templateUrl: './change-exercise-name.component.html',
  styleUrls: ['./change-exercise-name.component.css']
})
export class ChangeExerciseNameComponent implements OnInit {
  @Input() index: number;
  @Input() exercise: Exercise;

  constructor(
    private validateService: ValidateService,
    private prService: PersonalRecordService) { }

  ngOnInit() {
  }

  onSubmitExerciseNameChange(changedName) {
    // Check for empty input
    if (changedName.value.trim() === '') {
      this.validateService.validationMessage('Enter an exercise name.', 'danger');
      return;
    }
    this.prService.changeExerciseName(changedName.value, this.exercise);
    this.prService.isChangeExerciseName = false;
    this.prService.editIndex = null;
  }

  onChangeNameCancel() {
    this.prService.isChangeExerciseName = false;
    this.prService.editIndex = null
  }

}
