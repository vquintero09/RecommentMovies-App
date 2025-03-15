import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@features/auth/auth.service';
import { addIcons } from 'ionicons';
import { notificationsOutline, personOutline, settingsOutline, logOutOutline, push } from 'ionicons/icons';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
   mail: string = 'vicoli09@outlook.com';
   private _AuthService = inject(AuthService);

   username!: string;

   constructor(){
      addIcons({personOutline, settingsOutline, notificationsOutline, logOutOutline})
   };
   
   ngOnInit(): void {
      this._AuthService.getDataUSer().subscribe({
         next: (value) => this.username = value.username
      })
   }

}
