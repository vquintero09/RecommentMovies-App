import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { notificationsOutline, personOutline, settingsOutline, logOutOutline } from 'ionicons/icons';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  mail: string = 'vicoli09@outlook.com';

  constructor(){
    addIcons({personOutline, settingsOutline, notificationsOutline, logOutOutline})
  }
}
