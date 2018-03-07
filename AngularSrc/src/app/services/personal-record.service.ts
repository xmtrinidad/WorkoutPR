import { Injectable } from '@angular/core';
import {PERSONAL_RECORDS} from "../models/mock-data";
import {MuscleGroup} from "../models/MuscleGroup";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PersonalRecordService {
  // BehaviorSubject used to set initial value
  _muscleGroup = new BehaviorSubject<MuscleGroup>(PERSONAL_RECORDS[0]);
  editIndex: number;
  _sortBy = new Subject<any>(); // Listen for sort change

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
    PERSONAL_RECORDS.forEach((muscleGroup) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updated.name) {
          exercise.prs.unshift(pr);
          return true;
        }
      });
    });
  }

  deletePr(updatedExercise, deletedPr) {
    PERSONAL_RECORDS.forEach((muscleGroup) => {
      muscleGroup.exercises.find((exercise) => {
        if (exercise.name === updatedExercise.name) {
          exercise.prs = exercise.prs.filter((pr) => pr !== deletedPr);
          return true;
        }
      });
    });
  }

  /**
   * Select sort type and set exercise being sorted
   * @param selectedSort - the sort type
   * @param exercise - the exercise being sorted
   */
  selectSort(selectedSort, exercise) {
    this._sortBy.next({sort: selectedSort, selectedExercise: exercise});
  }

  sortByMax(prs) {
    prs.sort((a, b) => {
      if (a.max < b.max) {
        return b.max - a.max;
      }
    });
  }

  sortByReps(prs) {
    prs.sort((a, b) => {
      if (a.reps < b.reps) {
        return b.reps - a.reps;
      }
    });
  }

}
