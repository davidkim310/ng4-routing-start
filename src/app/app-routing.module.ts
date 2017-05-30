import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] }, //localhost:4200/users renders UsersComponent
  // colon tells angular that this is the dynamic part of the path
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent}
  ] },
  //404 page
  { path: 'not-found', component: PageNotFoundComponent },
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