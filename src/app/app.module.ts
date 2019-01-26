import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from 'src/app/components/mainComponent/main.component';
import { NgModule } from '@angular/core';
import { PouchDbService } from './services/pouch.db.service';
import { RoutingService } from 'src/app/services/routing.service';
import { StartUpComponent } from 'src/app/components/startUpComponent/start.up.component';
import { StartUpService } from 'src/app/services/start.up.service';
import { SummaryChartComponent } from 'src/app/components/summaryChart/summary.chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartUpComponent,
    SummaryChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PouchDbService,
    RoutingService,
    StartUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
