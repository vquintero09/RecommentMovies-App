import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imovies } from '@core/interfaces/movies-api.interface';
import { MoviesApiService } from '@core/services/movies-api.service';
import { MovieCardComponent } from '@shared/components/movie-card/movie-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './genre-movies.component.html',
  styleUrl: './genre-movies.component.scss',
  standalone: true,
  imports: [ AsyncPipe, MovieCardComponent ]
})
export class GenreMoviesComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _moviesApiService = inject(MoviesApiService);

  genre!: string | null;
  movies$!: Observable<Imovies[]>;

  ngOnInit(): void {
    this.genre = this._route.snapshot.paramMap.get('genre');

    if(this.genre) {
      this.getMoviesByGenre(this.genre)
    }
  };

  getMoviesByGenre(genre: string){
    this.movies$ = this._moviesApiService.getMoviesByGenre(genre);
  }
}
