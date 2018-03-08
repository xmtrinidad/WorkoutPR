import {Component, Input, OnInit} from '@angular/core';
import {PersonalRecordService} from "../../../services/personal-record.service";
import {Exercise} from "../../../models/Exercise";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  @Input() muscleGroupName: string;
  exerciseName: string;

  constructor(private prService: PersonalRecordService) { }

  ngOnInit() {
  }

  onAddExerciseSubmit() {
    const createdExercise: Exercise = {
      name: this.exerciseName,
      prs: []
    };
    this.prService.addExercise(createdExercise);
    this.exerciseName = null;
  }

}
