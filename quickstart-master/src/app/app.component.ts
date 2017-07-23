import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [` 
        .active {
          border:1px solid red;
        }
  `]

})
export class AppComponent {
  delete = false;
  name = 'Subh';
  test = 'Starting Value';

  constructor(private router: Router) {
  }

  onClicked(value: string) {
    alert('Oolala!');
  }

  navigateTo() {
    this.router.navigate(['/']);
  }

}
