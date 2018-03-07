import { Injectable } from '@angular/core';
import {PERSONAL_RECORDS} from "../models/mock-data";
import {MuscleGroup} from "../models/MuscleGroup";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PersonalRecordService {
  _muscleGroup = new Subject<MuscleGroup>();
  editIndex: number;

  constructor() { }

  // Get exercises from selected muscle group
  getExercises(muscleGroup) {
    const selectedMuscleGroup = PERSONAL_RECORDS.find((muscleGroups) => muscleGroups.name === muscleGroup);
    this._muscleGroup.next(selectedMuscleGroup);
  }

  // Set index for exercise being edited
  editExercise(index) {
    this.editIndex = index;
  }

  /**
   * Update mock data records
   * @param updatedExercise
   */
  updatePrs(updatedExercise) {
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

  addPr(updated, pr) {
    PERSONAL_RECORDS.forEach((muscleGroup, i) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updated.name) {
          exercise.prs.unshift(pr);
          return true;
        }
      });
    });
  }

  deletePr(updatedExercise, deletedPr) {
    PERSONAL_RECORDS.forEach((muscleGroup, i) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updatedExercise.name) {
          exercise.prs = exercise.prs.filter((pr) => pr !== deletedPr);
          return true;
        }
      });
    });
  }

}
