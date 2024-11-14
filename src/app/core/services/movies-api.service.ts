import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Imovies } from "@core/interfaces/movies-api.interface";

@Injectable({ providedIn: "root",}) 
export class MoviesApiService {
  private URL_MOVIES = "http://localhost:3000/movies";
  private URL_MOVIEID = "http://localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3";
  private httpClient = inject( HttpClient );

  getMovies(): Observable<Imovies[]> {
    return this.httpClient.get<Imovies[]>(this.URL_MOVIES);
  }

  getMoviesByGenre(genre: string): Observable<Imovies[]> {
    const params = new HttpParams().set('genre', genre)  
    return this.httpClient.get<Imovies[]>(this.URL_MOVIES, {params})
  }

  getMovieById(): Observable<Imovies> {
    return this.httpClient.get<Imovies>(this.URL_MOVIEID);
  }
}
