import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Imovies } from '@core/interfaces/movies-api.interface';
import { MoviesApiService } from '@core/services/movies-api.service';
import { MovieCardComponent } from '@shared/components/movie-card/movie-card.component';
import { Observable } from 'rxjs';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {arrowBackOutline} from 'ionicons/icons'
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-category',
  templateUrl: './genre-movies.component.html',
  styleUrl: './genre-movies.component.scss',
  standalone: true,
  imports: [ AsyncPipe, MovieCardComponent, IonIcon, SharedModule ]
})
export class GenreMoviesComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _moviesApiService = inject(MoviesApiService);
  private readonly _router = inject(Router)

  genre!: string | null;
  movies$!: Observable<Imovies[]>;
  movieSelected!: Imovies;

  constructor(){
    addIcons({arrowBackOutline})
  }

  ngOnInit(): void {
    this.genre = this._route.snapshot.paramMap.get('genre');

    if(this.genre) {
      this.getMoviesByGenre(this.genre)
    }
  };

  getMoviesByGenre(genre: string){
    this.movies$ = this._moviesApiService.getMoviesByGenre(genre);
  }

  backHome(){
    this._router.navigateByUrl("/")
  }

  onMovieSelected(movie: Imovies){
    this.movieSelected = movie;
    console.log(this.movieSelected);
    
  }
}
