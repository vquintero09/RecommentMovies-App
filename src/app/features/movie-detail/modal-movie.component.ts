import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-modal-movie',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './modal-movie.component.html',
  styleUrl: './modal-movie.component.scss'
})
export class ModalMovieComponent {

}
