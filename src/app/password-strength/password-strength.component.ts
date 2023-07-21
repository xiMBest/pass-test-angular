import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  strengthColor = {
    section1: 'gray',
    section2: 'gray',
    section3: 'gray'
  };

  calculatePasswordStrength() {
    const length = this.password.length;
    if (length === 0) {
      this.strengthColor = {
        section1: 'gray',
        section2: 'gray',
        section3: 'gray'
      };
    } else if (length < 8) {
      this.strengthColor = {
        section1: 'red',
        section2: 'red',
        section3: 'red'
      };
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strengthColor = {
          section1: 'green',
          section2: 'green',
          section3: 'green'
        };
      } else if (hasLetters && hasDigits) {
        this.strengthColor = {
          section1: 'red',
          section2: 'yellow',
          section3: 'gray'
        };
      } else {
        this.strengthColor = {
          section1: 'red',
          section2: 'red',
          section3: 'gray'
        };
      }
    }
  }
}

