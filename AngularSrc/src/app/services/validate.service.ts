import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface Alert {
  msg: string;
  type: string;
}

@Injectable()
export class ValidateService {
  // Listen for alert
  _alert = new Subject<Alert>();

  constructor() { }

  /**
   * Check for empty fields
   * @param user - the user registering
   * @returns {boolean} - false if any fields are undefined or empty
   */
  validateEmptyInputFields(user) {
    for (const prop in user) {
      if (user[prop] === undefined || user[prop].trim() === '') {
        this.validationMessage(`Please fill out all fields`, 'danger');
        return false;
      }
    }
    return true;
  }

  validateEmail(email) {
    // Taken from Stack Overflow: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      this.validationMessage(`Invalid email.  Please enter a valid email to register`, 'danger');
      return false;
    }
    return true;
  }

  validationMessage(msg, type) {
    this._alert.next({msg: msg, type: type});
  }

}
