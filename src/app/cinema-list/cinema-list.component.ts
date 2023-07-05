import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Cinema } from '../cinema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  cinemas: any[] = [];

  constructor(public commonService: CommonServiceService, public router: Router) {}

  ngOnInit(): void {
    this.commonService.getCinemaList().subscribe((data: Cinema[]) => {
      this.cinemas = data;
    });
  }

  redirectToCinemaShows(id: number, source: String){
    this.router.navigate( ['/cinema', id, source ]);
  }

}
