import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {

  cinemas: any[] = [];

  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.commonService.getCinemaList().subscribe((data: Cinema[]) => {
      this.cinemas = data;
    });
  }

}
