import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from '@features/home/dashboard/dashboard.component';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { MovieExplorerComponent } from './movie-explorer/movie-explorer.component';
import { AsyncPipe } from '@angular/common';

export const routes: Routes = [
   {
      path: '', 
      component: HomeComponent
   },
  
]

@NgModule({
   imports: [
      MatCardModule, 
      IonIcon, 
      RouterModule.forChild(routes), 
      SharedModule, 
      AsyncPipe, 
   ],
   exports: [HomeComponent],
   declarations: [
      DashboardComponent,
      HomeComponent,
      MovieExplorerComponent
   ],
   providers: [],
})
export class HomeModule { }
