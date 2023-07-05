import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { User } from '../user';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup([]);
  user: User = new User();

  constructor(private formBuilder: FormBuilder, private commonService: CommonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  signUp(): void {
    this.user.mobile = this.signUpForm.value.mobile;
    this.user.name = this.signUpForm.value.name;
    this.commonService.signUp(this.user).subscribe();
    this.router.navigate(['']);
  }

}
