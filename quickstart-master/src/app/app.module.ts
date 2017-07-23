import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {EventBindingComponent} from './binding/eventbinding.component';
import {DataBindingComponent} from './binding/databinding.component';
import {PropertyBindingComponent} from './binding/propertybinding.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {APP_ROUTES_PROVIDER} from './app.routing';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home-component.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user/user-edit.component';
@NgModule({
  imports: [BrowserModule, APP_ROUTES_PROVIDER],
  declarations: [AppComponent,
    EventBindingComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    LifecycleComponent,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    UserEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
