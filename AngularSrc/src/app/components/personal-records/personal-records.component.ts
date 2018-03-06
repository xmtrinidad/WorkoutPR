import { Component, OnInit } from '@angular/core';
import {MuscleGroup} from "../../models/MuscleGroup";
import {PersonalRecordService} from "../../services/personal-record.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonalRecord} from "../../models/PersonalRecord";

@Component({
  selector: 'app-personal-records',
  templateUrl: './personal-records.component.html',
  styleUrls: ['./personal-records.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PersonalRecordsComponent implements OnInit {
  selectedMuscleGroup: MuscleGroup;
  selectedExercise: number;
  isDesktop: boolean;
  newReps: number;
  newMax: number;

  constructor(
    private modalService: NgbModal,
    public prService: PersonalRecordService) { }

  ngOnInit() {
    // Listen for muscle group select
    this.prService._muscleGroup.subscribe((selected) => this.selectedMuscleGroup = selected);
    // Check for desktop and open drop downs if true
    this.checkForDesktop(768);
  }

  /**
   * Toggle drop down on exercise name click
   * @param index
   */
  onExerciseClick(index) {
    // Toggle
    if (index === this.selectedExercise) {
      this.selectedExercise = null;
      return;
    }
    this.selectedExercise = index;
  }

  onExerciseEdit() {
    this.prService.editExercise();
  }

  onExerciseUpdate(content) {
    this.modalService.open(content);
  }

  onNewRecordSubmit(exercise) {
    const pr: PersonalRecord = {
      reps: this.newReps,
      max: this.newMax
    };
    this.prService.updatePr(exercise, pr);
  }

  /**
   * Check for window resize
   * @param e
   */
  onResize(e) {
    e.target.innerWidth < 768 ? this.isDesktop = false : this.isDesktop = true;
  }

  /**
   * Check for desktop screen width
   * @param desktopWidth - the desired desktop screen width
   */
  checkForDesktop(desktopWidth) {
    if (window.innerWidth < desktopWidth) {
      this.selectedExercise = 0;
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }

  }

}
