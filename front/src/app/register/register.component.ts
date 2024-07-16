import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule]
})
export class RegisterComponent {
  password: string = '';
  passwordStrength: number = 0;
  passwordHasLength: boolean = false;
  passwordHasUppercase: boolean = false;
  passwordHasLowercase: boolean = false;
  passwordHasNumber: boolean = false;
  passwordHasSpecialChar: boolean = false;

  checkPasswordStrength() {
    const length = this.password.length >= 8;
    const uppercase = /[A-Z]/.test(this.password);
    const lowercase = /[a-z]/.test(this.password);
    const number = /[0-9]/.test(this.password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    this.passwordHasLength = length;
    this.passwordHasUppercase = uppercase;
    this.passwordHasLowercase = lowercase;
    this.passwordHasNumber = number;
    this.passwordHasSpecialChar = specialChar;

    let strength = 0;
    if (length) strength += 20;
    if (uppercase) strength += 20;
    if (lowercase) strength += 20;
    if (number) strength += 20;
    if (specialChar) strength += 20;

    this.passwordStrength = strength;
  }

  onSubmit() {
    // Handle form submission
  }
}
