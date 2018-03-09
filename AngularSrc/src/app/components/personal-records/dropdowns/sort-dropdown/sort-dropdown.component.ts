import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../../models/Exercise";
import {PersonalRecordService} from "../../../../services/personal-record.service";

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.css']
})
export class SortDropdownComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private prService: PersonalRecordService) { }

  ngOnInit() {
  }

  /**
   * Get button text to determine sort type
   * Get exercise from card clicked
   * @param e
   * @param exercise
   */
  onSortClick(e) {
    this.prService.selectSort(e.target.innerText, this.exercise);
  }

}
