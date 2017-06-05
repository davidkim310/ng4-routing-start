import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] }, //localhost:4200/users renders UsersComponent
  // colon tells angular that this is the dynamic part of the path
  { 
    path: 'servers', 
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
  ] },
  //404 page
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  //alternative to component uses redirect
  //wildcard route: make sure it is the last route
  { path: '**', redirectTo: '/not-found' } 
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // must add RouterModule for routing to work. Also pass in the routes with "forRoot()"
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}