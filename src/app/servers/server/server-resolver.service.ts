//will load the data in advance
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';

interface Server {
    id: number;
    name: string;
    status: string;
}
//if you want to access a service within a service, we must inject
@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    //always takes in a route and state
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}