import { Component, OnInit } from '@angular/core';
import {MuscleGroup} from "../../models/MuscleGroup";
import {PersonalRecordService} from "../../services/personal-record.service";

@Component({
  selector: 'app-personal-records',
  templateUrl: './personal-records.component.html',
  styleUrls: ['./personal-records.component.css']
})
export class PersonalRecordsComponent implements OnInit {
  selectedMuscleGroup: MuscleGroup;

  constructor(private prService: PersonalRecordService) { }

  ngOnInit() {
    this.prService._muscleGroup.subscribe((selected) => this.selectedMuscleGroup = selected);
  }

}
