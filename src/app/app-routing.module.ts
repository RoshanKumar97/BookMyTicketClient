import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: "movie", component: MovieListComponent },
  { path: "show/details/:movieId/:source", component: ShowListComponent},
  { path: "cinemas", component: CinemaListComponent},
  { path: "cinema/:cinemaId/:source", component: ShowListComponent},
  { path: "seats", component: SeatListComponent},
  { path: "signIn", component: LoginComponent},
  { path: "logout", component: LoginComponent},
  { path: "signUp", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
