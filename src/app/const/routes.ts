import { Route } from "@angular/router";
import { StartUpComponent } from 'src/app/components/startUpComponent/start.up.component';
import { MainComponent } from 'src/app/components/mainComponent/main.component';

export const startUpRoute: Route = {
    path: 'startUp',
    component: StartUpComponent
};

export const mainRoute: Route = {
    path: 'main',
    component: MainComponent
};