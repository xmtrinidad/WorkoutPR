import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../../models/Exercise";
import {PersonalRecordService} from "../../../../services/personal-record.service";

@Component({
  selector: 'app-exercise-options',
  templateUrl: './exercise-options.component.html',
  styleUrls: ['./exercise-options.component.css']
})
export class ExerciseOptionsComponent implements OnInit {
  @Input() index: number;
  @Input() exercise: Exercise;

  constructor(private prService: PersonalRecordService) { }

  ngOnInit() {
  }

  onDeleteExerciseClick() {
    this.prService.deleteExercise(this.exercise);
  }

  /**
   * Get index of exercise name being changed
   * Set change boolean to true
   * @param i
   */
  onChangeExerciseNameClick() {
    this.prService.selectedExerciseIndex = this.index;
    this.prService.isChangeExerciseName = true;
  }

}
