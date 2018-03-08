import { Injectable } from '@angular/core';
import {PERSONAL_RECORDS} from "../models/mock-data";
import {PERSONAL_RECORDS_EMPTY} from "../models/mock-data";
import {MuscleGroup} from "../models/MuscleGroup";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Exercise} from "../models/Exercise";

@Injectable()
export class PersonalRecordService {
  // BehaviorSubject used to set initial value
  _muscleGroup = new BehaviorSubject<MuscleGroup>(PERSONAL_RECORDS[0]);
  currentRecord: MuscleGroup;
  // Listen for sort change
  _sortBy = new Subject<any>();
  editIndex: number;



  constructor() { }



  addExercise(exercise: Exercise) {
    this.currentRecord.exercises.push(exercise);
  }

  changeExerciseName(newName, ex) {
    this.currentRecord.exercises.find((exercise) => {
      if (exercise.name === ex.name) {
        exercise.name = newName;
        return true;
      }
    });
  }

  deleteExercise(ex) {
    console.log(ex);
    const exercises = this.currentRecord.exercises;
    this.currentRecord.exercises = exercises.filter(exercise => exercise.name !== ex.name);
  }

  // Get exercises from selected muscle group
  getExercises(muscleGroup) {
    for (let i = 0; i < PERSONAL_RECORDS.length; i++) {
      if (PERSONAL_RECORDS[i].name === muscleGroup) {
        this._muscleGroup.next(PERSONAL_RECORDS[i]);
        return;
      }
    }
  }

  // Set index for exercise being edited
  editPrs(index) {
    this.editIndex = index;
  }

  /**
   * Update mock data records
   * @param updatedExercise
   */
  updatePrs(updatedExercise) {
    const exercises = this.currentRecord.exercises;
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].name === updatedExercise.name) {
        exercises[i] = updatedExercise;
        return;
      }
    }
  }

  addPr(updated, pr) {
    const exercises = this.currentRecord.exercises;
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].name === updated.name) {
        exercises[i].prs.unshift(pr);
        return;
      }
    }
  }

  deletePr(updatedExercise, deletedPr) {
    const exercises = this.currentRecord.exercises;
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].name === updatedExercise.name) {
        exercises[i].prs = exercises[i].prs.filter(pr => pr !== deletedPr);
        return;
      }
    }
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
