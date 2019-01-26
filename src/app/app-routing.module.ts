import { RouterModule, Routes } from '@angular/router';
import { mainRoute, startUpRoute, summaryChartRoute } from 'src/app/const/routes';

import { NgModule } from '@angular/core';

const routes: Routes = [
  mainRoute,
  startUpRoute,
  summaryChartRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
