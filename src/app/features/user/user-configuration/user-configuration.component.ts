import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { earthOutline, moonOutline, personOutline, trashOutline } from 'ionicons/icons';
@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrl: './user-configuration.component.scss',
})
export class UserConfigurationComponent {
  languages: string[] = ['Español', 'Ingles'];

  constructor(){
    addIcons({moonOutline, earthOutline, personOutline, trashOutline})
  };
}
