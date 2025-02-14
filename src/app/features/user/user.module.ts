import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserPorfileComponent } from './user-porfile/user-porfile.component';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { IonIcon } from '@ionic/angular/standalone';
import { Routes, RouterLink, RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';


export const routes: Routes = [
  {
    path: 'my-porfile', 
    component: UserPorfileComponent
  },
  {
    path: 'settings/porfile', 
    component: UserConfigurationComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes), IonIcon, RouterLink, MatExpansionModule, MatSlideToggle, MatRadioModule],
  exports: [UserComponent],
  declarations: [UserComponent, UserPorfileComponent, UserConfigurationComponent, UserNotificationsComponent],
  providers: [],
})
export class UserModule { }
