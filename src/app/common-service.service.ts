import { Injectable } from '@angular/core';
import { Subject, Observable, catchError, forkJoin } from 'rxjs';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Show } from './show';
import { Cinema } from './cinema';
import { User } from './user';

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

  login(mobile: string){
    return this.httpClient
      .get<User>(this.url + '/user' + '/login/' + mobile)
      .pipe(catchError(this.handleError));
  }

  isLoggedIn(): boolean {
    let checkLogin = sessionStorage.getItem('isLoggedIn');
    if ( checkLogin === null || checkLogin === 'false'){
      return false
    }
    else{
      return true
    }
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

  signUp(user: User): Observable<User> {
    return this.httpClient
      .post<User>(this.url + '/user' + '/add', user)
  }

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

  getMovieName(movieId: number): Observable<Movie[]>{
    return this.httpClient
      .get<Movie[]>(this.url + '/movie/' + movieId);
  }

  getShowsByCinemaId(cinemaId: number): Observable<[Show[], Movie[]]>{
    // return this.httpClient
    //   .get<Show[]>(this.url + '/show' + '/byCinema/' + cinemaId);
     const showList$ = this.httpClient.get<Show[]>(this.url + '/show' + '/cinemaId/' + cinemaId);
     const movieList$ = this.httpClient.get<Movie[]>(this.url + '/show' + '/movieId/' + cinemaId);

     return forkJoin([showList$, movieList$]);
  }

  getMovieListName() {
    this.movieNames = [];
    this.movieList.forEach(movielist => {
      this.movieNames.push(movielist.name);
    })
    return this.movieNames;
  }

  handleError(eResponse: HttpErrorResponse): Observable<User> {
    alert("User does not exist. Please Sign Up!")
    return new Observable<User>;
  }
}
