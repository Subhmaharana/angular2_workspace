import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fa-event-bind',
  template: `
    <p>Event Binding Working!!</p>
    <button (click)="onClicked()">Click Me!</button>
  `
})

export class EventBindingComponent {
  @Output() clicked = new EventEmitter();

  onClicked() {
    this.clicked.emit('Emitter is working');
    // alert("Yippeee...");
  }
}
