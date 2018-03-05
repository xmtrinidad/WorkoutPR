import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe((info: any) => {
      this.user = info.user;
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
