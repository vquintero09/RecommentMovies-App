import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Imovies, newMovieEntry } from "@core/interfaces/movies-api.interface";
import { URL_GET_ALL_MOVIES, URL_CREATE_MOVIE } from "./urls-api";

@Injectable({ providedIn: "root",}) 
export class MoviesApiService {
  private URL_MOVIEID = "http://localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3";
  private _HTTP = inject( HttpClient );

  getMovies(): Observable<Imovies[]> {
    return this._HTTP.get<Imovies[]>(URL_GET_ALL_MOVIES);
  }

  getMoviesByGenre(genre: string): Observable<Imovies[]> {
    const params = new HttpParams().set('genre', genre)  
    return this._HTTP.get<Imovies[]>(URL_GET_ALL_MOVIES, {params})
  }

  getMovieById(): Observable<Imovies> {
    return this._HTTP.get<Imovies>(this.URL_MOVIEID);
  }

  createMovie(movieEntry: newMovieEntry): Observable<Imovies> {
    return this._HTTP.post<Imovies>(URL_CREATE_MOVIE, movieEntry)
  }
}
