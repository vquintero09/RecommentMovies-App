import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Imovies } from '@core/interfaces/movies-api.interface';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: Imovies
}

