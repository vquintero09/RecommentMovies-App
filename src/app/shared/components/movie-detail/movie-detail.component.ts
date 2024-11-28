import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons'

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [MatCardModule, IonIcon ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {

  constructor(){
    addIcons({star})
  }

}
