import {UserComponent} from './user/user.component';
import {HomeComponent} from './home-component.component';

import {RouterModule} from '@angular/router';
const APP_ROUTES = [
  {path: 'user', component: UserComponent},
  {path: 'user/:idField', component: UserComponent},
  {path: '', component: HomeComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
