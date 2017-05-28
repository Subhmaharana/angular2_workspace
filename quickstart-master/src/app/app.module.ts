import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EventBindingComponent } from './binding/eventbinding.component';
import { DataBindingComponent } from './binding/databinding.component';
import { PropertyBindingComponent } from './binding/propertybinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,EventBindingComponent,DataBindingComponent,PropertyBindingComponent,LifecycleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
