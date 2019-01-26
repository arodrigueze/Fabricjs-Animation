import { MainComponent } from 'src/app/components/mainComponent/main.component';
import { Route } from '@angular/router';
import { StartUpComponent } from 'src/app/components/startUpComponent/start.up.component';
import { SummaryChartComponent } from '../components/summaryChart/summary.chart.component';

export const routes = {
    MAIN: 'main',
    START_UP: 'startUp',
    SUMMARY_CHART: 'summaryChart'
};

export const startUpRoute: Route = {
    path: routes.START_UP,
    component: StartUpComponent
};

export const mainRoute: Route = {
    path: routes.MAIN,
    component: MainComponent
};

export const summaryChartRoute: Route = {
    path: routes.SUMMARY_CHART,
    component: SummaryChartComponent
};


