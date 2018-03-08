import {MuscleGroup} from "./MuscleGroup";

export const PERSONAL_RECORDS: MuscleGroup[] = [
  {
    name: 'Legs',
    exercises: [
      { name: 'Squats', prs: [ {reps: 6, max: 200}, {reps: 4, max: 225}, {reps: 8, max: 210},] },
      { name: 'Leg Press', prs: [ {reps: 8, max: 510}, {reps: 4, max: 500}, {reps: 2, max: 525},] },
      { name: 'Leg Ext', prs: [ {reps: 8, max: 150}, {reps: 10, max: 165}, {reps: 6, max: 145},] },
    ]
  },
  {
    name: 'Back',
    exercises: [
      { name: 'Pull-Down', prs: [ {reps: 8, max: 170}, {reps: 5, max: 160}, {reps: 8, max: 150},] },
      { name: 'Pull-Ups', prs: [ {reps: 15, max: 170}, {reps: 14, max: 170}, {reps: 13, max: 170},] },
      { name: 'DB Row', prs: [ {reps: 4, max: 95}, {reps: 5, max: 90}, {reps: 8, max: 85},] },
    ]
  },
  {
    name: 'Chest',
    exercises: [
      { name: 'Bench Press', prs: [ {reps: 3, max: 225}, {reps: 5, max: 215}, {reps: 8, max: 200},] },
      { name: 'Incline DB Press', prs: [ {reps: 4, max: 85}, {reps: 6, max: 80}, {reps: 8, max: 75},] },
      { name: 'Fly Machine', prs: [ {reps: 6, max: 150}, {reps: 5, max: 145}, {reps: 5, max: 140},] },
    ]
  }
];

export const PERSONAL_RECORDS_EMPTY: MuscleGroup[] = [
  {
    name: 'Legs',
    exercises: []
  },
  {
    name: 'Back',
    exercises: []
  },
  {
    name: 'Chest',
    exercises: []
  },
  {
    name: 'Arms',
    exercises: []
  },
  {
    name: 'Shoulders',
    exercises: []
  }
];
