import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import {ValidateService} from "../services/validate.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private validateService: ValidateService,
    private authService: AuthService, private router: Router){ }

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
