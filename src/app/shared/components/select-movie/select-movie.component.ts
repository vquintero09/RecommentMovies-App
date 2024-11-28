import { Component, inject, OnInit } from '@angular/core';
import { Imovies } from '@core/interfaces/movies-api.interface';
import { MoviesApiService } from '@core/services/movies-api.service';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.component.html',
  styleUrl: './select-movie.component.scss'
})
export class SelectMovieComponent implements OnInit {

  private readonly _moviesService = inject(MoviesApiService);

  movies!: Imovies[];
  displayedMovies!: Imovies[];
  currentIndex: number = 0;
  moviesPerPage: number = 2;
  movieSelected!: number;
  selectedMovie!: Imovies;

  constructor(){
    addIcons({chevronBackOutline, chevronForwardOutline});
  }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this._moviesService.getMovies().subscribe((data) => {
      this.movies = data;
      this.displayedMovies = this.movies.slice(this.currentIndex)
    })
  }; 

  slideMoviesNext() {
    if(this.currentIndex + this.moviesPerPage < this.movies.length) {
      this.currentIndex += 2
    } else {
      this.currentIndex = 0
    }
    
    this.updateDisplayedMovies()
  };

  slideMoviesPrev() {
    if(this.currentIndex - this.moviesPerPage >= 0){
      this.currentIndex -= this.moviesPerPage
    } else {
      this.currentIndex = Math.max(this.movies.length - this.moviesPerPage, 0)
    }

    return this.updateDisplayedMovies()
  }

  updateDisplayedMovies() {
    this.displayedMovies = this.movies.slice(this.currentIndex, this.currentIndex + this.moviesPerPage);
  }

  selectMovie(movie: Imovies) {
    this.selectedMovie = movie;
    
  }

}
