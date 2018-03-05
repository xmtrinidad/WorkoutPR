import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  constructor(
    private validateService: ValidateService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.validateService.validationMessage('you are logged out', 'info')
  }

}
