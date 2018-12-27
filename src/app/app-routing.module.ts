import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startUpRoute } from 'src/app/const/routes'

const routes: Routes = [startUpRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
