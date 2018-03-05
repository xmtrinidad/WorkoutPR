import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  username: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };
    // Check for empty inputs
    if (!this.validateService.validateEmptyInputFields(user)) {
      return false;
    }
    // Check for valid email
    if (!this.validateService.validateEmail(user.email)) {
      return false;
    }

    // Register User using back-end
    this.authService.registerUser(user).subscribe((data: any) => {
      if (data.success) {
        this.validateService.validationMessage('You are now registered and can log in', 'danger');
        this.router.navigate(['login']);
      } else {
        this.validateService.validationMessage('Something went wrong.  Try registering again.', 'danger');
        this.router.navigate(['register']);
      }
    });
  }

}
