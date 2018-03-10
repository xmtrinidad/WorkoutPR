import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe((info: any) => {
      this.user = info.user;
      console.log(this.user);
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
