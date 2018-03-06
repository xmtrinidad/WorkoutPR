import { Injectable } from '@angular/core';
import {PERSONAL_RECORDS} from "../models/mock-data";
import {MuscleGroup} from "../models/MuscleGroup";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PersonalRecordService {
  _muscleGroup = new Subject<MuscleGroup>();

  constructor() { }

  getExercises(muscleGroup) {
    const selectedMuscleGroup = PERSONAL_RECORDS.find((muscleGroups) => muscleGroups.name === muscleGroup);
    this._muscleGroup.next(selectedMuscleGroup);
  }

}
