import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { routes } from '../const/routes';

@Injectable()
export class StartUpService {
    public statusMessage = new BehaviorSubject('Loading...');

    constructor(private router: RoutingService) {
        setTimeout(() => {
            this.router.goTo(routes.SUMMARY_CHART);
        }, 50);
    }
}
