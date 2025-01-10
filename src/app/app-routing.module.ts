import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'peliculas/:genre',
    loadComponent: () => import('@features/genreMovies/genre-movies.component').then((c) => c.GenreMoviesComponent)
  },
  {
    path: 'add-new-movie',
    loadComponent: () => import('@features/add-new-movie/add-new-movie.component').then((c) => c.AddNewMovieComponent)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
