import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;
  username: any;

  constructor(public router: Router, private authService: AuthService, public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.isLoggedIn = isLoggedIn;
      }
      else if (this.commonService.isLoggedIn()) {
        this.isLoggedIn = this.commonService.isLoggedIn();
      }
      else{
        this.isLoggedIn = false;
      }
     });

    this.authService.username$.subscribe((username) => {
      if(username === '' || username === null){
        this.username = sessionStorage.getItem('username');
      }
      else {
        this.username = username;
      }
     });
  }
}
