import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navbar/navigation.component';
import { MatIcon } from '@angular/material/icon';
import { IonIcon } from '@ionic/angular/standalone';
import { SelectMovieComponent } from './components/select-movie/select-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
  imports: [NavigationComponent, MatIcon, IonIcon, MovieCardComponent],
  exports: [NavigationComponent, SelectMovieComponent, MovieCardComponent],
  declarations: [SelectMovieComponent],
  providers: [],
})
export class SharedModule { }
