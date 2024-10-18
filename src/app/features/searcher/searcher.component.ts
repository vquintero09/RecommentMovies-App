import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons'

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [IonIcon, MatButtonModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent {
  constructor(){
    addIcons({searchOutline})
  }
}
