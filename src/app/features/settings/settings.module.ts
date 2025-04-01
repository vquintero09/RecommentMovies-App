import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { IonIcon } from '@ionic/angular/standalone';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes), IonIcon, MatExpansionModule, AsyncPipe, DatePipe, MatRadioModule, MatSlideToggle ],
  exports: [],
  declarations: [SettingsComponent],
  providers: [],
})
export class SettingsModule { }
