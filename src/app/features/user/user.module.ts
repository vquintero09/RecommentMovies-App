import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserPorfileComponent } from './user-porfile/user-porfile.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { IonIcon } from '@ionic/angular/standalone';
import { Routes, RouterLink, RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { AsyncPipe, DatePipe } from '@angular/common';
import { SettingsModule } from '@features/settings/settings.module';


export const routes: Routes = [
  {
    path: 'my-porfile', 
    component: UserPorfileComponent
  },
  {
    path: 'settings', 
    loadChildren: () => import('@features/settings/settings.module').then((M) => M.SettingsModule)
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes), IonIcon, RouterLink, MatExpansionModule, MatSlideToggle, MatRadioModule, AsyncPipe, DatePipe, SettingsModule],
  exports: [UserComponent],
  declarations: [UserComponent, UserPorfileComponent, UserNotificationsComponent],
  providers: [],
})
export class UserModule { }
