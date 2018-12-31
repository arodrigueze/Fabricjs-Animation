import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RoutingService } from 'src/app/services/routing.service';

@Injectable()
export class StartUpService {
    public statusMessage = new BehaviorSubject('Loading...');

    constructor(private router: RoutingService){
        setTimeout(() => {
            this.router.goTo('main');
        }, 5000);
    }
}
