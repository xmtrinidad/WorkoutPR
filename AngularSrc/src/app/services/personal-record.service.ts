import { Injectable } from '@angular/core';
import {PERSONAL_RECORDS} from "../models/mock-data";
import {MuscleGroup} from "../models/MuscleGroup";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PersonalRecordService {
  _muscleGroup = new Subject<MuscleGroup>();
  editIndex: number;

  constructor() { }

  getExercises(muscleGroup) {
    const selectedMuscleGroup = PERSONAL_RECORDS.find((muscleGroups) => muscleGroups.name === muscleGroup);
    this._muscleGroup.next(selectedMuscleGroup);
  }

  editExercise(index) {
    this.editIndex = index;
  }

  /**
   * Update mock data records
   * @param updatedExercise
   */
  updateRecords(updatedExercise) {
    PERSONAL_RECORDS.forEach((muscleGroup) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updatedExercise.name) {
          muscleGroup.exercises[this.editIndex] = updatedExercise;
          return true;
        }
      });
    });
    this.editIndex = null;
  }

  updatePr(updated, pr) {
    PERSONAL_RECORDS.forEach((muscleGroup, i) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updated.name) {
          exercise.prs.unshift(pr);
          return true;
        }
      });
    });
  }

}
