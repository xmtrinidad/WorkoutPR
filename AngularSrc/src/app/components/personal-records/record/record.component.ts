import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../models/Exercise";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() exercise: Exercise;
  constructor() { }

  ngOnInit() {
  }

}
