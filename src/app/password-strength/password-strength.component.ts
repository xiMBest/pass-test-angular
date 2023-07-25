// password-strength.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PasswordStrengthService } from '../password-service/password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  passwordForm = this.fb.group({
    password: new FormControl('')
  });

  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {}

  getPasswordStrengthColor(): string {
    const passwordControl = this.passwordForm.get('password');
    if (passwordControl && passwordControl.value !== null && passwordControl.value !== undefined) {
      const password = passwordControl.value;
      return this.passwordStrengthService.calculatePasswordStrength(password);
    }
    return 'gray';
  }
  
}
