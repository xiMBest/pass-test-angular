import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  calculatePasswordStrength(password: string): string {
    const length = password.length;
    if (length === 0) {
      return 'gray';
    } else if (length < 8) {
      return 'red';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return 'green';
      } else if (hasLetters && hasDigits) {
        return 'yellow';
      } else {
        return 'red';
      }
    }
  }
}