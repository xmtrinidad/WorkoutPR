import {Component, OnInit} from '@angular/core';
import {Alert, ValidateService} from "../../services/validate.service";



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alert: Alert;

  // Hide alert until activated
  staticAlertClosed = true;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
    // Subscribe to alert and activate when triggered from validation service
    this.validateService._alert.subscribe((message) => {
      this.alert = {
        msg: message.msg,
        type: message.type
      };
      this.staticAlertClosed = false;
      setTimeout(() => this.staticAlertClosed = true, 5000);
    });
  }



}
