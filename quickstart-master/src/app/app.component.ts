import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <fa-event-bind (clicked)="onClicked($event)"></fa-event-bind>
            <fa-prop-bind result = 10></fa-prop-bind>
            <fa-data-bind></fa-data-bind>
  `,
})
export class AppComponent  {
  name = 'Subh';
  onClicked(value: string){
    alert("Oolala!");
  }

}
