import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnDestroy {
  idField: string;
  subscription: Subscription;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.subscription = activatedRouter.params.subscribe(
      (params: any) => this.idField = params['idField']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 'TMR'}});
  }

}
