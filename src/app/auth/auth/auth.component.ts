import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor() {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);
  }

  onSubmit(authForm: NgForm): void {
    console.log(authForm);
    console.log(authForm.value);
    authForm.reset();
  }

}
