import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <fa-event-bind (clicked)="onClicked($event)"></fa-event-bind>
            <fa-prop-bind result = 10></fa-prop-bind>
            <fa-data-bind></fa-data-bind>
            <fa-lifecycle *ngIf="!delete">
                  <p>{{test}}</p>
            </fa-lifecycle>
            <button (click) = "delete = true">Click to Delete</button>
            <button (click) = "test = 'Changed Value'">Click to Change</button>
  `,
})
export class AppComponent  {
  delete = false;
  name = 'Subh';
  test = "Starting Value";
  onClicked(value: string){
    alert("Oolala!");
  }

}
