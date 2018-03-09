import { Component, OnInit } from '@angular/core';
import {MuscleGroup} from "../../models/MuscleGroup";
import {PersonalRecordService} from "../../services/personal-record.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NewPrModalComponent} from "./new-pr-modal/new-pr-modal.component";
import {ValidateService} from "../../services/validate.service";

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
  isDesktop: boolean;
  addExerciseBtnText = 'Add Exercise';


  constructor(
    private validateService: ValidateService,
    private modalService: NgbModal,
    public prService: PersonalRecordService) { }

  ngOnInit() {
    // Listen for muscle group select
    this.prService._muscleGroup.subscribe((selected) => {
      this.prService.currentRecord = selected;
      this.selectedMuscleGroup = selected;
    });
    // Check for desktop and open drop downs if true
    this.checkForDesktop(768);
  }

  // Toggle add exercise card and btn text
  onAddExerciseClick() {
    this.prService.isAddExercise = true;
  }

  /**
   * Toggle drop down on exercise name click
   * @param index
   */
  onExerciseClick(index, e) {
    if (this.isDesktop) {
      return;
    }
    // Prevent card collapse if options click
    if (!e.target.classList.contains('card-header')) {
      return;
    }
    // Toggle
    if (index === this.prService.editIndex) {
      this.prService.editIndex = null;
      return;
    }
    this.prService.editIndex = index;
  }

  // Set index for exercise being edited
  onEditPrs(index) {
    this.prService.editPrs(index);
  }

  // Open modal
  onAddPr(exercise) {
    const modalRef = this.modalService.open(NewPrModalComponent);
    modalRef.componentInstance.exercise = exercise;
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
      this.prService.editIndex = 0;
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }

  }

}
