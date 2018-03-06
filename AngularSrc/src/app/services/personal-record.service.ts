import { Injectable } from '@angular/core';
import {PERSONAL_RECORDS} from "../models/mock-data";
import {MuscleGroup} from "../models/MuscleGroup";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PersonalRecordService {
  _muscleGroup = new Subject<MuscleGroup>();
  isEdit = false;

  constructor() { }

  getExercises(muscleGroup) {
    const selectedMuscleGroup = PERSONAL_RECORDS.find((muscleGroups) => muscleGroups.name === muscleGroup);
    this._muscleGroup.next(selectedMuscleGroup);
  }

  editExercise() {
    this.isEdit = true;
  }

  /**
   * Update mock data records
   * @param updatedExercise
   */
  updateRecords(updatedExercise) {
    PERSONAL_RECORDS.forEach((muscleGroup, i) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updatedExercise.name) {
          muscleGroup.exercises[i] = updatedExercise;
          return true;
        }
      });
    });
    this.isEdit = false;
  }

}
