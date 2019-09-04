import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

// Models
import { Movie } from '../models/movie.models';

// Services
import { MoviesService } from '../services/movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<Observable<Movie[]>> {

  constructor(private moviesService: MoviesService) { }

  resolve() {
    return this.moviesService.getMovieList();
  }
}
