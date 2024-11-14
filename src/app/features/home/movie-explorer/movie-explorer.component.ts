import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Imovies } from '@core/interfaces/movies-api.interface';
import { MoviesApiService } from '@core/services/movies-api.service';


@Component({
  selector: 'app-movie-explorer',
  templateUrl: './movie-explorer.component.html',
  styleUrl: './movie-explorer.component.scss'
})
export class MovieExplorerComponent implements OnInit{
  private readonly _moviesService = inject(MoviesApiService);
  private readonly _router = inject(Router)

  @ViewChild('scrollContent', {static: true}) scrollContent!: ElementRef;

  movies!: Imovies[];
  displayedMovies!: Imovies[];
  currentIndex: number = 0;
  moviesReverse!: Imovies[];
  
  genres = ["Action", "comedy", "Adventure", "drama", "Sci-Fi", "Horror", "Romance", "Fantasy", "Anime", "Crime"];


  ngOnInit(): void {
    this.getMovies();    
  }

  getMovies() {
    this._moviesService.getMovies( ).subscribe((data) => {
      this.movies = data;
      this.displayedMovies = this.movies.slice(this.currentIndex);
      this.moviesReverse = this.movies.reverse();
    })
  }; 

  goToGenre(genre: string) {
    this._router.navigate(['/peliculas/', genre])
  }

  scrollLeft(){
    this.scrollContent.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    })
  }

  scrollRight(){
    this.scrollContent.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    })
  }

  
  
}
