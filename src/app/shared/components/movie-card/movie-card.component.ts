import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Imovies } from '@core/interfaces/movies-api.interface';
import { MoviesApiService } from '@core/services/movies-api.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit{
  private readonly _moviesService = inject(MoviesApiService);

  movies!: Imovies[];
  displayedMovies!: Imovies[];
  currentIndex: number = 0;
  moviesPerPage: number = 7;

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this._moviesService.getMovies().subscribe((data) => {
      this.movies = data;
      this.displayedMovies = this.movies.slice(this.currentIndex, this.moviesPerPage)
    })
  }; 
}
