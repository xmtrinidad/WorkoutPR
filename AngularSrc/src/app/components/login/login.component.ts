import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    // Check for empty inputs
    if (!this.validateService.validateEmptyInputFields(user)) {
      return false;
    }

    // Authenticate User using back-end
    this.authService.authenticateUser(user).subscribe((data: any) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.validateService.validationMessage('You are now logged in', 'success');
        this.router.navigate(['home']);
      } else {
        this.validateService.validationMessage(data.msg, 'danger');
      }
    });
  }

}
