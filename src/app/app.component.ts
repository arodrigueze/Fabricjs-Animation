import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { routes } from './const/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: RoutingService) {
    this.router.goTo(routes.START_UP);
  }
}
