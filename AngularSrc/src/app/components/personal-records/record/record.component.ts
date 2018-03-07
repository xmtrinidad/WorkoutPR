import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../models/Exercise";
import {PersonalRecordService} from "../../../services/personal-record.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() exercise: Exercise;
  constructor(private prService: PersonalRecordService) { }

  ngOnInit() {
    // listen for sort change
    this.sortRecords();
  }

  /**
   * Sort based on selected sort value
   */
  sortRecords() {
    this.prService._sortBy.subscribe((selectedSort) => {
      if (selectedSort === 'Max') {
        this.prService.sortByMax(this.exercise.prs);
      } else {
        this.prService.sortByReps(this.exercise.prs);
      }
    });
  }

}
