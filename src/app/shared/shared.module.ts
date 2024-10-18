import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navbar/navigation.component';
import { MatIcon } from '@angular/material/icon';
import { IonIcon } from '@ionic/angular/standalone';
import { SelectMovieComponent } from './components/select-movie/select-movie.component';


@NgModule({
  imports: [NavigationComponent, MatIcon, IonIcon],
  exports: [NavigationComponent, SelectMovieComponent],
  declarations: [SelectMovieComponent],
  providers: [],
})
export class SharedModule { }
