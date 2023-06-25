import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Movie } from '../movie';

import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any[] = [];

  constructor(public commonServiceService: CommonServiceService, public router: Router) {}

  ngOnInit(): void {
    this.commonServiceService.getMovieList().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  redirectToShowDetails(movieId: number, imageUrl: string) {
    this.router.navigate(['/show/details', movieId], { queryParams: { imageUrl } });
  }  

}
