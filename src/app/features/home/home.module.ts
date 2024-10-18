import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from '@features/home/dashboard/dashboard.component';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';

export const routes: Routes = [{path: '', component: HomeComponent}]

@NgModule({
  imports: [MatCardModule, IonIcon, RouterModule.forChild(routes), SharedModule],
  exports: [HomeComponent],
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
