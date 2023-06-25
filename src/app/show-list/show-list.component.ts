import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  shows: any[] = [];
  movieId: number = 0;
  imageUrl: string ="";

  constructor(public commonService: CommonServiceService, public router: Router, public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId = this.actRoute.snapshot.params['movieId'];
    this.imageUrl = this.actRoute.snapshot.queryParams['imageUrl'];
    this.commonService.getShowList(this.movieId).subscribe((data: Show[]) =>{
      this.shows = data;
    });
  }

}
