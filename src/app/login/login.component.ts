import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { CommonServiceService } from '../common-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<string> = new EventEmitter<string>();

  loginForm: FormGroup = new FormGroup([]);
  errorMessage: string = "";
  user: User = new User();
  isLoggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonServiceService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobile: ['', Validators.required]
    });

    this.isLoggedIn = this.commonService.isLoggedIn();
  }

  doLogin() {
    this.commonService.login(this.loginForm.value.mobile).subscribe(
      (data) => {
        this.user = data;
        //sessionStorage.setItem('username', data.name);
        this.authService.setLoggedIn(true);
        this.authService.setUsername(data.name);
        this.onLogin.emit(data.name);
        this.router.navigateByUrl('');
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    this.authService.setLoggedIn(false);
    this.authService.setUsername('');
    this.router.navigateByUrl('');
  }
}
