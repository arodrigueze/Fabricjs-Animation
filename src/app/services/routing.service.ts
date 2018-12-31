import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class RoutingService {

    constructor(private router: Router) {}
    
    public goTo(destination: string) {
        this.router.navigate([`/${destination}`]);
    }
}