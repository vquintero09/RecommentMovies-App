import { Component, inject, OnInit } from '@angular/core';
import { MoviesApiService } from '@core/services/movies-api.service';
import { Observable } from 'rxjs';
import { Imovies } from '@core/interfaces/movies-api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'RecommendMovies';
  private moviesServices = inject(MoviesApiService);
  

  movies!: Imovies[];
  movieId!:Imovies;

  ngOnInit(): void {
    // this.getMovies()
  }

  // getMovies() {
  //   this.moviesServices.getMovies().subscribe((data) => this.movies = data);

  //   this.moviesServices.getMovieById().subscribe((movie) => this.movieId = movie)
  // };

}
