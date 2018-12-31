import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startUpRoute, mainRoute } from 'src/app/const/routes'

const routes: Routes = [
  startUpRoute,
  mainRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
