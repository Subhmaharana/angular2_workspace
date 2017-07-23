import {UserComponent} from './user/user.component';
import {HomeComponent} from './home-component.component';
import {RouterModule} from '@angular/router';
import {USER_APP_ROUTES} from './user/user.routing';

const APP_ROUTES = [
  {path: 'user/:idField', component: UserComponent},
  {path: 'user/:idField', component: UserComponent, children : USER_APP_ROUTES},
  {path: 'user', redirectTo: 'user/1', pathMatch : 'full'},
  {path: '**', redirectTo: 'user/1', pathMatch : 'full'},
  {path: '', component: HomeComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
