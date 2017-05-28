import { Component,Input } from '@angular/core';

@Component({
    selector:'fa-prop-bind',
    template:`
      {{result}}
    `

})

export class PropertyBindingComponent{
    @Input() result: number = 0;
}
