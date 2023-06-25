import { Injectable } from '@angular/core';
import { Subject, Observable, catchError } from 'rxjs';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Show } from './show';
import { Cinema } from './cinema';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  movieNames : string[] = [];
  updatedMovieList: any[] = [];
  private url = 'http://localhost:8080/bmt';

  constructor(private httpClient: HttpClient) { }

  movieList = [
    { url: '../../assets/image/movies/movie1.jpg', name: 'MI', location: 'Chennai', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie2.jpg', name: 'Alpha', location: 'World wide', date: 'Sep 7-8' }
  ]

  getMovieList(): Observable<Movie[]>{
    return this.httpClient
      .get<Movie[]>(this.url + '/movie' +'/all');
  }

  getShowList(movieId: number): Observable<Show[]> {
    return this.httpClient
      .get<Show[]>(this.url + '/show' + '/details/' + movieId);
  }

  getCinemaList(): Observable<Cinema[]> {
    return this.httpClient
      .get<Cinema[]>(this.url + '/cinema' + '/all');
  }

  getMovieListName() {
    this.movieNames = [];
    this.movieList.forEach(movielist => {
      this.movieNames.push(movielist.name);
    })
    return this.movieNames;
  }
}
