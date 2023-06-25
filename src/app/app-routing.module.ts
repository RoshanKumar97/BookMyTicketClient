import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';


const routes: Routes = [
  { path: '', component: MovieListComponent},
  { path: "movie", component: MovieListComponent },
  { path: "show/details/:movieId", component: ShowListComponent},
  { path: "cinemas", component: CinemaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
