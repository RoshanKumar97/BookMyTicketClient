import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../show';
import { Movie } from '../movie';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  shows: any[] = [];
  movies: any[] = [];
  imageUrl: string ="";
  cinemaId: number = 0;
  movieName: string = "";
  source: string = "";

  constructor(public commonService: CommonServiceService, public router: Router, public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.source = this.actRoute.snapshot.params['source'];
    if (this.source === 'fromCinema') {
      let cinemaId: number = this.actRoute.snapshot.params['cinemaId']
      this.commonService.getShowsByCinemaId(cinemaId).subscribe(([shows, movies]) => {
        this.shows = shows;
        this.movies = movies;
      });
    }
    else {
      let movie: Movie = JSON.parse(this.actRoute.snapshot.queryParams['movie']);
      let movieId: number = movie.id;
      this.imageUrl = movie.imageUrl;
      this.commonService.getShowList(movieId).subscribe((data: Show[]) => {
        this.shows = data;
      });
    }
  }

  redirectToShowSeats(show: Show): void {
    this.router.navigate(['/seats'], { queryParams: { show: JSON.stringify(show) } });
  }

}
