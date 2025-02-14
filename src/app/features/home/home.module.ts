import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserModule } from '@features/user/user.module';
import { HomeComponent } from './home.component';
import { MovieExplorerComponent } from './movie-explorer/movie-explorer.component';
import { DashboardComponent } from '@features/home/dashboard/dashboard.component';
import { MovieDetailComponent } from "../../shared/components/movie-detail/movie-detail.component";

import { IonIcon } from '@ionic/angular/standalone';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

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
      MovieDetailComponent,
      MatSidenavModule,
      UserModule
   ],
   exports: [
      HomeComponent
   ],
   declarations: [
      DashboardComponent,
      HomeComponent,
      MovieExplorerComponent
   ],
   providers: [],
})
export class HomeModule { }
