import { Component, inject, OnInit } from '@angular/core';
import { IDataUSer } from '@core/interfaces/user-api.interface';
import { AuthService } from '@features/auth/auth.service';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, earthOutline, moonOutline, personOutline, trashOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrl: './user-configuration.component.scss',
})
export class UserConfigurationComponent implements OnInit {
  private _AuthService = inject(AuthService);
   
  languages: string[] = ['Español', 'Ingles'];
  sectionsDataUser = [
    {label: 'Nombre de usuario', key: 'username'},
    {label: 'id', key: '_id'},
    {label: 'Cambiar contraseña', key: 'password'},

  ];
  DataUser$!: Observable<any>;
  arroba: string = '@';

  constructor(){
    addIcons({moonOutline, earthOutline, personOutline, trashOutline, chevronForwardOutline})
  };

  ngOnInit(): void {
   this.DataUser$ = this._AuthService.getDataUSer();
   console.log(this.DataUser$);
   
  }
}
