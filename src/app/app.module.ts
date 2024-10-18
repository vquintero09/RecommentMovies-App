import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '@core/interceptors/api.interceptor';
import { ErrorApiInterceptor } from '@core/interceptors/error-api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RouterOutlet
  ],
  providers: [
    provideAnimationsAsync(), 
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
