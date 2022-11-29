import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  loader = false;
  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {
    if (!authForm.valid) {
      return;
    }

    this.loader = true;
    const form = authForm.value;

    if (this.isLoginMode) {
      this.authService.signUp(form.email, form.password)
      .subscribe(
        (value: any) => {
          // console.log(value);
          this.loader = false;
          this.router.navigate(['/recipes']);
        },
        error => {
          console.log(error.error.error.message);
          this.errorMessage = error.error.error.message;
          this.loader = false;
        }
      );
    } else {
      this.authService.signIn(form.email, form.password)
      .subscribe(
        (value: any) => {
          // console.log(value);
          this.loader = false;
          // this.router.navigate(['']);
          this.router.navigate(['/recipes']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.error.message;
          this.loader = false;
        }
      );
    }
    // console.log(authForm);
    // console.log(authForm.value);
    authForm.reset();
  }

  // closeAlert(): void {
  //   this.errorMessage = null;
  // }
  
  onHandleError(): void {
    this.errorMessage = null;
  }
}
