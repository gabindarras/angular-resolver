import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesResolverService } from './resolver/movies-resolver.service';

const routes: Routes = [{ path: '', component: MovieListComponent, resolve: { movies: MoviesResolverService } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
