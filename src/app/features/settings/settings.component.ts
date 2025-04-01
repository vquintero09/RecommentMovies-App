import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@features/auth/auth.service';
import { Observable } from 'rxjs';

import { addIcons } from 'ionicons';
import { chevronForwardOutline, earthOutline, moonOutline, personOutline, trashOutline } from 'ionicons/icons';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
   private _AuthService = inject(AuthService);
     
   languages: string[] = ['Español', 'Ingles'];
   sectionsDataUser = [
      {label: 'Nombre de usuario', key: 'username'},
      {label: 'id', key: '_id'},
      {label: 'Cambiar contraseña', key: 'password'}
   ];
   DataUser$!: Observable<any>;
   arroba: string = '@';

   constructor(){
      addIcons({moonOutline, earthOutline, personOutline, trashOutline, chevronForwardOutline})
   };

   ngOnInit(): void {
      this.DataUser$ = this._AuthService.getDataUSer();
   }
}
