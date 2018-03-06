import { Component, OnInit } from '@angular/core';
import {PersonalRecordService} from "../../services/personal-record.service";

@Component({
  selector: 'app-muscle-group-dropdown',
  templateUrl: './muscle-group-dropdown.component.html',
  styleUrls: ['./muscle-group-dropdown.component.css']
})
export class MuscleGroupDropdownComponent implements OnInit {
  btnValues = ['Legs', 'Back', 'Chest'];

  constructor(private pr: PersonalRecordService) { }

  ngOnInit() {
  }

  onMuscleGroupClick(clickedBtn) {
    const muscleGroup = clickedBtn.target.innerText;
    this.pr.getExercises(muscleGroup);
  }

}
