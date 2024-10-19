import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-explorer',
  templateUrl: './movie-explorer.component.html',
  styleUrl: './movie-explorer.component.scss'
})
export class MovieExplorerComponent {
  genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Romance"]
}
