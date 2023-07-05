import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Movie } from '../movie';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[] = [];
  cinemaId: number = 0;

  constructor(public commonServiceService: CommonServiceService, public router: Router, public actRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.commonServiceService.getMovieList().subscribe((data: Movie[]) => {
        this.movies = data;
      });
  }

  redirectToShowDetails(movie: Movie, source: String): void {
    this.router.navigate(['/show/details', movie.id, source], { queryParams: { movie: JSON.stringify(movie) } });
  }
  
}
