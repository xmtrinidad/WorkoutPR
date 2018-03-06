import {MuscleGroup} from "./MuscleGroup";

export const PERSONAL_RECORDS: MuscleGroup[] = [
  {
    name: 'Legs',
    exercises: [
      { name: 'Squats', prs: [ {reps: 6, max: 225}, {reps: 4, max: 210}, {reps: 8, max: 200},] },
    ]
  },
  {
    name: 'Back',
    exercises: [
      { name: 'Pull-Down', prs: [ {reps: 8, max: 170}, {reps: 5, max: 160}, {reps: 8, max: 150},] },
    ]
  },
  {
    name: 'Chest',
    exercises: [
      { name: 'Bench Press', prs: [ {reps: 3, max: 225}, {reps: 5, max: 215}, {reps: 8, max: 200},] },
    ]
  }
];
