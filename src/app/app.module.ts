import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartUpComponent } from 'src/app/components/startUpComponent/start.up.component';
import { StartUpService } from 'src/app/services/start.up.service';
import { RoutingService } from 'src/app/services/routing.service';
import { MainComponent } from 'src/app/components/mainComponent/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    RoutingService,
    StartUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
